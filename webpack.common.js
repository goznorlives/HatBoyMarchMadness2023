const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.ts",
  target: "web",
  output: {
    filename: '[name].js',
    sourceMapFilename: "[file].map",
    path: path.resolve(__dirname, "dist"),
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(png)$/i,
        type: "asset/resource",
        include: [
          path.resolve(__dirname, 'tiled/images'),
        ],
        generator: {
          filename: 'images/[name][ext]'
        }
      },
      {
        test: [/\.tm(x|j)$/, /\.ts(x|j)$/],
        type: "asset/resource",
        include: [
          path.resolve(__dirname, 'tiled'),
        ],
        generator: {
          filename: '[name][ext]'
        }
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.js$/,
        use: ["source-map-loader"],
        exclude: [path.resolve(__dirname, "node_modules/excalibur")],
        enforce: "pre",
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      title: "Excalibur Webpack Sample",
    }),
  ],
};
