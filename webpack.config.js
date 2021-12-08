const HtmlWebpackPlugin = require('html-webpack-plugin');
const {resolve} = require('path');

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
        //loader "use" excecutes from top to bottom
        rules: [
            {
                test: /\.css$/,
                use: [
                    // creates style nodes from JS strings
                    'style-loader',
                    //css changes to a comonjs module imported in the index.js
                    'css-loader'
                ]
            },
            // {
            //     // test: /\.(png|jpe?g|gif)$/i,
            //     test: /\.(png|jpg|gif)$/,
            //     loader: 'file-loader',
            //     options : {
            //         // outputPath: 'images',
            //         esModule: false,
            //         // output file name
            //         // [name] is the name of the file
            //         // [ext] is the extension of the file
            //         // name: 'images/[name].[ext]'
            //         // hash is a unique hash for the file limit 10 chars
            //         // name: '[name].[ext]',
            //         name: '[hash:10].[ext]'
            //     }
            // },
            {
                test: /\.(svg|png|jpg|jpeg|gif)$/,
                // include: 'images',
                loader: 'file-loader',
                options: {
                    esModule: false,
                    name: 'images/[name].[ext]',
                    // name: 'images/[hash:6].[ext]'
                }
            },
            // {
            //     test:/\.html$/,
            //     // html-loader is used to load images in html files
            //     loader: 'html-loader',
            // },
            // {
            //     exclude: /\.(html|js|css|svg|png|jpg|jpeg|gif)$/,
            //     loader: 'file-loader',
            //     options: {
            //         name: '[name].[ext]',
            //         // outputPath: '/images/'
            //     }
            // }
        ]
    },
    // plugins is where you can add plugins
    plugins: [
        // creates an index.html file in the build folder auto plug in JS and CSS
        new HtmlWebpackPlugin({
            // use template to create the index.html file
            template: './src/index.html'
        }),
    ],

    // mode is used to determine what kind of bundle is created
    mode: 'development',
}
