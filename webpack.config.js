// path 모듈 가져오기
const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development",

  entry: {
    main: path.resolve("./src/app.js"),
  },

  output: {
    filename: "[name].js",
    path: path.resolve("./dist"),
  },

  module: {
    rules: [
      // {
      //   test: /\.js$/,
      //   use: [path.resolve("./myLoader.js")],
      // },
      {
        test: /\.css$/,
        // 뒤에서부터 실행이 되게 된다.
        use: ["style-loader", "css-loader"],
      },

      {
        test: /\.(png|jpg|gif|svg)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 20 * 1024,
          },
        },
      },
    ],
  },
  // 주석을 달 수 있게 해주는 plugin
  plugins: [
    new webpack.BannerPlugin({
      banner: "배너입니다!!!" + new Date().toLocaleDateString(),
    }),
  ],
};
