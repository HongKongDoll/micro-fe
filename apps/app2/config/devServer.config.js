import path from "path";

// https://github.com/webpack/webpack-dev-server/blob/master/examples/api/simple/server.js
const devServerOptions = {
  contentBase: path.resolve(__dirname, "../build"),
  open: true,
  hot: true,
  compress: true,
  // progress: true,
  // friendly error
  quiet: true,
  stats: {
    colors: true,
  },
  historyApiFallback: true,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
};

export default devServerOptions;
