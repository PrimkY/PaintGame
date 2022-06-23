const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const esLintPlugin = (isDev) => isDev ? [] : [ new ESLintPlugin({ extensions: ['ts', 'js', 'jsx'] }) ];

const devServer = (isDev) => !isDev ? {} : {
    devServer: {
        open: true,
        port: 3000,
        historyApiFallback: {index: '/'}
    },
};

module.exports = ({ development }) => {
    return ({
        mode: development ? 'development' : 'production',
        devtool: development ? 'source-map' : false,
        entry: './src/index.js',
        output: {
            filename: '[name].[contenthash].js',
            path: path.resolve(__dirname, 'dist'),
            clean: true,
            publicPath: "/"
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/i,
                    exclude: "/node_modules/",
                    use: [{
                        loader: 'babel-loader',
                    }],
                },
                {
                    test: /\.css$/i,
                    use: [MiniCssExtractPlugin.loader, 'css-loader'],
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    type: 'asset/resource',
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/i,
                    type: 'asset/resource',
                },
                {
                    test: /\.(csv|tsv)$/i,
                    use: ['csv-loader'],
                },
                {
                    test: /\.xml$/i,
                    use: ['xml-loader'],
                },
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
            ],
        },
        plugins: [
            ...esLintPlugin(development),
            new HtmlWebpackPlugin({template: './public/index.html'}),
            new MiniCssExtractPlugin({filename: '[name].[contenthash].css'}),
        ],
        resolve: {
            extensions: ['.tsx', '.ts', '.js', '.jsx'],
        },
        ...devServer(development)
    });
};