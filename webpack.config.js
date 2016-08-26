var path = require('path');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let extractCSS = new ExtractTextPlugin('stylesheets/[name].css');
var webpackConfig = {
    entry: './public/app.js',
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        extractCSS
    ],
    devtool: 'inline-source-map',
    module: {
        loaders: [{
            test: path.join(__dirname, 'src'),
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            test: /\.html$/,
            loader: 'raw-loader'
        }, {
            test: /\.scss$/,
            loader: extractCSS.extract(['css', 'sass'])
          },
        ]}
        // }, { test: /\.scss$/, loaders: ["style", "css?sourceMap", "sass?sourceMap"]},
        //     devtool: 'source-map'
        // }

    }
};
export.modules = webpackConfig;
