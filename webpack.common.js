// Webpack uses this to work with directories
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: ['./src/js/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    // publicPath: '/wp-content/themes/theme-name/dist/',
    publicPath: '/dist/',
    filename: 'bundle.js',
    chunkFilename: '[id][hash].js'
  },
  module: {
    rules: [
        {
            test: /\.js$/,
            exclude: [/node_modules\/(?!(swiper|dom7)\/).*/, /\.test\.jsx?$/],
            use: {
                loader: 'babel-loader',
                options: {
                    "presets": [
                        ["@babel/preset-env"]
                    ],
                    plugins: ["syntax-dynamic-import"]
                }
            }
        },
        {
            test: /\.(sa|sc|c)ss$/,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader
                },
                {
                    loader: "css-loader",
                },
                {
                    loader: "postcss-loader"
                },
                {
                    loader: "sass-loader",
                    options: {
                        implementation: require("sass"),
                    }
                },
            ]
        },
        {
            test: /\.(png|jpe?g|gif|svg)$/,
            use: [
                {
                    loader: "file-loader",
                    options: {
                    outputPath: 'images'
                    }
                }
            ]
        },
        {
            test: /\.(woff|woff2|ttf|otf|eot)$/,
            use: [
                {
                    loader: "file-loader",
                    options: {
                        outputPath: 'fonts'
                    }
                }
            ]
        }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
        filename: "bundle.css",
        chunkFilename: '[id][hash].css',
        // publicPath: '/wp-content/themes/theme-name/dist/',
        publicPath: '/dist/',
    })
  ],
  devtool: 'none',
};