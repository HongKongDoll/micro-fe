process.env.NODE_ENV = "production";

import webpack from "webpack";

import createConfig from "../config/webpack.config";

const webpackConfig = createConfig(process.env.NODE_ENV);
const complier = webpack(webpackConfig);

complier.run((err, stats) => {
  // https://webpack.js.org/api/node/#error-handling
  if (err) {
    console.error(err.stack || err);
    if (err.details) {
      console.error(err.details);
    }
    return;
  }

  const info = stats.toJson();

  if (stats.hasErrors()) {
    process.exit(1);
  }

  if (stats.hasWarnings()) {
    console.warn(info.warnings);
  }
});
