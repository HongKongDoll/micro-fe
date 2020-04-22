import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default (mode) => ({
  mode,
  entry: path.resolve(__dirname, "../src/index.js"),
  output: {
    filename: "app1.bundle.js",
    path: path.resolve(__dirname, "../public"),
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
  ],
});
