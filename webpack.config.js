const path = require('path') //vamos a requerir para acceder a las carpetas

const HtmlWebpackPlugin = require('html-webpack-plugin') 


module.exports = {
    entry: './src/index.js', //aqui vive nuestro producion
    output: { // donde mandar todo despues
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    resolve: {
        extensions: ['.js'],
    },
    module:{
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',                
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
               inject: true,
               template: './public/index.html',
               file: './index.html'
            }
        )
    ]
}