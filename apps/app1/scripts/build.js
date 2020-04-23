process.env.NODE_ENV = "production";

import webpack from "webpack";

import createConfig from "../config/webpack.config";

const webpackConfig = createConfig(process.env.NODE_ENV);
const compiler = webpack(webpackConfig);

compiler.run((err, stats) => {
  // https://webpack.js.org/api/node/#error-handling
  if (err) {
    console.error(err.stack || err);
    if (err.details) {
      console.error(err.details);
    }
    return;
  }

  const info = stats.toString({
    colors: true, // Shows colors in the console
  });

  if (stats.hasErrors()) {
    console.error(info.error);
    process.exit(1);
  }

  console.log(info);
});
