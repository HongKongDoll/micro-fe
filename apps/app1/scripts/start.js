process.env.NODE_ENV = "development";

import path from "path";
import webpack from "webpack";
import WebpackDevServer from "webpack-dev-server";

import createConfig from "../config/webpack.config";
import devServerOptions from "../config/devServerConfig"

const HOST = process.env.HOST || "0.0.0.0";
const PORT = process.env.PORT || 9001;

const webpackConfig = createConfig(process.env.NODE_ENV);
const complier = webpack(webpackConfig);

const devServer = new WebpackDevServer(complier, devServerOptions);

devServer.listen(PORT, HOST, console.error);
