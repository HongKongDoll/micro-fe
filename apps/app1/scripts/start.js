process.env.NODE_ENV = "development";

import path from "path";
import webpack from "webpack";
import WebpackDevServer from "webpack-dev-server";

import createConfig from "../config/webpack.config";

const HOST = process.env.HOST || "0.0.0.0";
const PORT = process.env.PORT || 9001;

const webpackConfig = createConfig(process.env.NODE_ENV);
const complier = webpack(webpackConfig);

// https://github.com/webpack/webpack-dev-server/blob/master/examples/api/simple/server.js
const devServerOptions = {
  ...webpackConfig.devServer,
  contentBase: path.resolve(__dirname, "../build"),
  open: true,
  hot: true,
  compress: true,
  stats: {
    colors: true,
  },
};

const devServer = new WebpackDevServer(complier, devServerOptions);

devServer.listen(PORT, HOST, console.error);
