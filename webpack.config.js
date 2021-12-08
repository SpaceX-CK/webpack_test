const HtmlWebpackPlugin = require('html-webpack-plugin');
// const {resolve} = require('path');

module.exports = {
    entry: './src/index.js',
    // output is where the bundle file will be created
    output: { 
        
        filename: 'build.js',
        path: __dirname + '/build',
        // assetModuleFilename: 'images/[name][ext]'
        // path: resolve(__dirname, 'build'),

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
            //     //use in css images to be loaded by webpack
            //     test: /\.(png|jpg|gif)$/i,
            //     // while only one loader can be used, we can use multiple loaders
            //     // url-loader requires file-loader and url-loader
            //     loader: 'file-loader',
            //     // use: [ 'file-loader', 'url-loader' ],
            //     options: {
            //         // while images are loaded as a base64 string
            //         // limit to 8kb images size
            //         // limit : 8*1024,
            //         //problems with the url-loader default use es6 , but html-loader requires es5 img import is commonjs
            //         //without esmodule, the import will not work eg: result [object Module]
            //         esModule: false,
            //     }
            // },
            {
                test: /\.(png|jpe?g|gif)$/i,
                // test: /\.(png|jpg|gif)$/i,
                loader: 'file-loader',
                options : {
                    // outputPath: 'images',
                    esModule: false,
                    // output file name
                    // [name] is the name of the file
                    // [ext] is the extension of the file
                    // name: 'images/[name].[ext]'
                    // hash is a unique hash for the file limit 10 chars
                    // name: '[name].[ext]',
                    name: '[hash:10].[ext]'
                }
            },
            {
                test:/\.html$/,
                // html-loader is used to load images in html files
                loader: 'html-loader',
            },
            // {
            //     exclude: /\.(html|js|css)$/,
            //     loader: 'file-loader',
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
