import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import FriendlyErrorsWebpackPlugin from "friendly-errors-webpack-plugin";

export default (mode) => {
  return {
    mode,
    entry: [
      // React-Hot-Loader is expected to be replaced by React Fast Refresh.
      // Please remove React-Hot-Loader if Fast Refresh is currently supported on your environment.
      // If you need hooks support, use @hot-loader/react-dom
      "react-hot-loader/patch",
      path.resolve(__dirname, "../src/index.js"),
    ],
    output: {
      filename: "[name].[hash].js",
      path: path.resolve(__dirname, "../build"),
      publicPath: "/",
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "../public/index.html"),
      }),
      new FriendlyErrorsWebpackPlugin(),
      new CleanWebpackPlugin(),
    ],
  };
};
