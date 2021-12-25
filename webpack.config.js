const HtmlWebpackPlugin = require("html-webpack-plugin");
const { resolve } = require("path");

module.exports = {
    entry: "./src/index.js",
    // output is where the bundle file will be created
    output: {
        filename: "main.js",
        // path: __dirname + '/build',
        // assetModuleFilename: 'images/[name][ext]'
        path: resolve(__dirname, "build"),
    },
    // module is where you can add loaders
    module: {
        //loader "use" excecutes from top to bottom
        rules: [
            // {
            //     test: /\.css$/,
            //     use: [
            //         // creates style nodes from JS strings
            //         "style-loader",
            //         //css changes to a comonjs module imported in the index.js
            //         "css-loader",
            //         // options: {
            //         //     outputPath: "css",
            //         // }
            //     ],
            // },
            {
                test: /\.css$/,
                use: [
                    // loader.MiniCssExtractPlugin.loader,
                    "style-loader",
                    "css-loader",
                    // {
                    //     options: {
                    //         outputPath: "css",
                    //         // localIdentName: "[name]__[local]--[hash:base64:5]",
                    //     },
                    // },
                ],
            },
            {
                // test: /\.(png|jpe?g|gif)$/i,
                // test: /\.(png|jpg|gif)$/,
                test: /\.(svg|png|jpg|jpeg|gif)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            esModule: false,
                            limit: 8 * 1024,
                            name: "images/[name][hash:6].[ext]",
                        },
                    }
                ]
                // loader: 'url-loader',
                // options: {
                //     esModule: false,
                //     // less than 8kb ==> data url conversion (base64)
                //     limit: 8 * 1024,
                //     // [name] is the name of the file
                //     // [ext] is the extension of the file
                //     outputPath: "images",
                //     name: '[hash:6].[ext]'
                //     // name: '[name].[ext]'
                // }
            },
            // {
            //     test: /\.(svg|png|jpg|jpeg|gif)$/,
            //     // include: 'images',
            //     use: {
            //         loader: "file-loader",
            //         options: {
            //             esModule: false,
            //             // name: 'images/[name].[ext]',
            //             name: "[name].[ext]",
            //             outputPath: "images",
            //             // name: 'images/[hash:6].[ext]'
            //         },
            //     },
            // },
            {
                test: /\.html$/,
                loader: "html-loader",
                options: {
                    // Disables attributes processing
                    sources: false,
                },
            },

            {
                exclude: /\.(html|js|css|svg|png|jpg|jpeg|gif)$/,
                loader: 'file-loader',
                options: {
                    outputPath: "source",
                }
            }
        ],
    },
    // plugins is where you can add plugins
    plugins: [
        // creates an index.html file in the build folder auto plug in JS and CSS
        new HtmlWebpackPlugin({
            // use template to create the index.html file
            template: "./src/index.html",
        }),
    ],

    // mode is used to determine what kind of bundle is created
    mode: "development",

    //activate dev server : npx webpack-dev-server
    devServer: {    // webpack-dev-server
        // only cache the bundle file not the whole project
        // contentBase: resolve(__dirname, 'build'),
        // open the default browser
        open: true,
        // port number
        port: 9000,
        //gzipped bundle file
        compress: true,
        // open the browser
        open: true,
    }

};
