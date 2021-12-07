module.exports = {
    entry: './src/index.js',
    // output is where the bundle file will be created
    output: { 
        
        filename: 'build.js',
        path: __dirname + '/build',
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
            }
        ]
    },
    // plugins is where you can add plugins
    plugins: [
        // new HtmlWebpackPlugin({
    ],

    // mode is used to determine what kind of bundle is created
    mode: 'development',
}