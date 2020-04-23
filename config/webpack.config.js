import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import FriendlyErrorsWebpackPlugin from "friendly-errors-webpack-plugin";

export default (mode) => {
  return {
    mode,
    entry: {
      root: path.resolve(__dirname, "../src/index.js"),
    },
    output: {
      filename: "[name].[hash].js",
      path: path.resolve(__dirname, "../build"),
      publicPath: "/",
    },
    node: {
      fs: 'empty'
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
