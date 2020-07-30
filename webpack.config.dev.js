var path = require("path");
var webpack = require("webpack");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: ["webpack-hot-middleware/client", "./client/daGram"],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/static/",
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  module: {
    rules: [
      // js
      {
        test: /\.js$/,
        loader: "babel-loader",
        query: {
          presets: ["es2015", "react"],
        },
        include: path.join(__dirname, "client"),
      },
      // CSS
      {
        test: /\.styl$/,
        include: path.join(__dirname, "client"),
        loader: "style-loader!css-loader!stylus-loader",
      },
    ],
  },
};
