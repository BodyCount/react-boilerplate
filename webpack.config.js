const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    devtool: "source-map"
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            
            {
                test: /\.css$/,
                use: [
                    'to-string-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },

            {
                test: /\.html$/,
                use: 'html-loader?minimize=false'
            },
        ]
    },
    devServer: {
        contentBase: './dist'
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css"
        }),
    ]
}