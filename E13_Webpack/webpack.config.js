const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
// const ESLintPlugin = require('eslint-webpack-plugin');
// const StylelintPlugin = require('stylelint-webpack-plugin');
// const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    mode: "development",
    entry: "./src/index.js", /* Точка входа - .JS-файлы */
   // entry: "./src/index.ts", /* Точка входа - .TS-файлы */

    devServer: {
        static: './dist',
        hot: true, /* HMR */
        open: true
    },
    devtool: 'inline-source-map', /* Настройка source map */

    output: { filename: 'bundle.js' }, /* Опции для файла сборки */

    module: {
        rules: [
                {
                  /* TEST: пропускаем через загрузчики файлы с указанным расширением */
                  test: /\.css$/,
                  /* USE: загрузчики, преобразующие файлы в модули */
                  use: [{ loader: MiniCssExtractPlugin.loader,
                           options: { esModule: true, },
                          }, 'css-loader',]
                },
                {
                 test: /\.pug$/,
                 use: [{ loader: 'pug-loader',
                         options: { pretty: true }, /* отступы и переносы строк */
                          }]
                },
                {
                test: /\.tsx?$/,
                use: 'ts-loader', /* Статическая типизация */
                exclude: /node_modules/,
              },
                       ]},
    plugins: [ new HtmlWebpackPlugin({template: 'src/index.pug'}),
               new MiniCssExtractPlugin(),
               new TerserWebpackPlugin(),
              // new ESLintPlugin(),
              // new StylelintPlugin()
              // new OptimizeCssAssetsWebpackPlugin()
             ],

    optimization: {
        minimize: true,
        minimizer: [ new TerserWebpackPlugin(),
                     new CssMinimizerPlugin()
                    // new OptimizeCssAssetsWebpackPlugin()
                     ]
    },
}