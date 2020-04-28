import { registerApplication } from "single-spa";

export default async function loadApp(name, prefix, appURL) {
  return registerApplication(
    name,
    () =>
      fetch(appURL)
        .then((res) => res.text())
        .then((htmlString) =>
          new DOMParser().parseFromString(htmlString, "text/html")
        )
        .then((doc) =>
          Promise.all(
            Array.from(doc.getElementsByTagName("script")).map(
              (script) => {
                if (script.src) {
                  return fetch(script.src).then((res) => res.text());
                } else {
                  return Promise.resolve(script.textContent);
                }
              }
            )
          )
        )
        .then((scriptsTextArr) =>
          scriptsTextArr
            .map((scriptText) => eval(scriptText))
            .filter((module) => {
              const { bootstrap, mount, unmount } = module || {};
              return [bootstrap, mount, unmount].every(
                (fn) => typeof fn === "function"
              );
            })
        )
        .then((entryArr) => {
          const [entry] = entryArr;
          return entry;
        }),
    (location) => location.pathname.startsWith(prefix)
  );
}
