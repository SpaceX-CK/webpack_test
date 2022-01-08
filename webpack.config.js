// const tailwindcss = require('tailwindcss');
// const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const { resolve } = require('path');

module.exports = {
  entry: './src/index.js',
  // output is where the bundle file will be created
  output: {
    filename: 'main.js',
    // path: __dirname + '/build',
    // assetModuleFilename: 'images/[name][ext]'
    path: resolve(__dirname, 'build'),
  },
  // module is where you can add loaders
  module: {
    // loader 'use' excecutes from top to bottom
    rules: [
      {
        test: /\.css$/,
        use: [
          // 'style-loader',
          // miniCssExtractPlugin.loader replaces style-loader
          // miniCssExtractPlugin.loader is a loader that extracts CSS into separate files.
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          // {
          //   loader: 'postcss-loader',
          //   options: {
          //     postcssOptions: {
          //       plugins: [
          //         tailwindcss('./tailwind.config.js'),
          //         autoprefixer,
          //       ],
          //     },
          //   },
          // },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        // type: 'asset/font',
        type: 'asset/resource',
        generator: {
          fileName: 'fonts/[name][hash:3].[ext]',
        },
      },
      {
        test: /\.(svg|png|jpg|jpeg|gif)$/,
        type: 'asset',
        generator: {
          filename: 'images/[name].[ext]',
        },
        parser: {
          dataUrlCondition: {
            maxSize: 1024 * 8, // 8kb
          },
        },
      },
      // {
      //     // test: /\.(png|jpe?g|gif)$/i,
      //     test: /\.(svg|png|jpg|jpeg|gif)$/,
      //     use: [
      //         {
      //             loader: 'url-loader',
      //             options: {
      //                 esModule: false,
      //                 limit: 8 * 1024,
      //                 name: 'images/[name][hash:3].[ext]',
      //             },
      //         }
      //     ]
      // },
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          // Disables attributes processing
          sources: false,
        },
      },
      {
        // exclude: /\.(html|js|css|svg|png|jpg|jpeg|gif)$/,
        exclude: [/(^|\.(js|jsx|ts|tsx|html|css|svg|png|jpg|jpeg|gif))$/],
        // loader: 'file-loader',
        type: 'asset/resource',
        // options: {
        //   outputPath: 'source',
        // },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader',
          // {
          //   loader: 'babel-loader',
          //   options: {
          //     presets: ['@babel/preset-env'],
          //   }
          // }
        ],
      },
    ],
  },
  // externals: {
  //   Alpine: 'alpinejs',
  // },
  optimization: {
    splitChunks: {
      chunks: 'all', // 同步或异步
      minSize: 100, // 自己设置最小分割大小
      cacheGroups: { // 缓存组
        // 打包第三方库
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/, // 正则匹配第三方库文件
          priority: -10, // 优先级
          reuseExistingChunk: true, // 如果一个模块已经被打包过了，那么这个模块也不会被打包
          filename: 'vendors.js', // 打包后的文件名
        },
        // 打包公共模块
        default: {
          minChunks: 2, // 被超过两个模块引用，才会被打包（可以去掉）
          priority: -20, // 优先级
          reuseExistingChunk: true, // 如果一个模块已经被打包过了，那么这个模块也不会被打包
          filename: 'common.js', // 打包后的文件名
        },
      },
    },
  },

  plugins: [
    // creates an index.html file in the build folder auto plug in JS and CSS
    new HtmlWebpackPlugin({
      // use template to create the index.html file
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({ filename: 'css/[name].css' }),
    // clean the build folder
    new CleanWebpackPlugin(),
    new ESLintPlugin(),
  ],

  // mode is used to determine what kind of bundle is created
  mode: 'development',

  // activate dev server : npx webpack-dev-server
  devServer: {
    // webpack-dev-server
    // only cache the bundle file not the whole project
    // contentBase: resolve(__dirname, 'build'),
    // open the default browser
    open: true,
    // port number
    port: 9000,
    // gzipped bundle file
    compress: true,
    hot: true,
  },
};
/**
 * WEBPACK CONFIGURATION 5
 * asset module type
 * 01 asset/resource-->flie-loader()
 * 02 asset/inline-->url-loader() to all the images
 * 03 asset/source-->raw-loader()
 * 04 asset --> (parser  dataUrlCondition maxsize) dynamic import
 */
