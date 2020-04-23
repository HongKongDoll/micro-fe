import { registerApplication } from "single-spa";

export default async function loadApp(name, prefix, appURL) {
  return registerApplication(
    name,
    () => SystemJS.import(appURL),
    (location) => location.pathname.startsWith(prefix)
  );
}
