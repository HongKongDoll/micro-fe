process.env.NODE_ENV = "production";

import webpack from "webpack";

import createConfig from "../config/webpack.config";

const webpackConfig = createConfig(process.env.NODE_ENV);
const complier = webpack(webpackConfig);

complier.run();
