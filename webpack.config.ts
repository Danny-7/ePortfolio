import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";
import FaviconsWebpackPlugin from 'favicons-webpack-plugin';

const config = {
    mode: 'development',
    entry: "./src/index.tsx",
    output: {
        path: path.join(__dirname, "/build"),
        filename: "build.js",
    },
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/,
                use: ['babel-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
        plugins: [new TsconfigPathsPlugin({ configFile: "./tsconfig.json" })],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './public/index.html'),
            favicon: "./public/favicon.ico"
        }),
        new FaviconsWebpackPlugin('./public/favicon.ico'),
    ],
    devServer: {
        contentBase: path.join(__dirname, './src'),
        port: 3000,
        hot: true,
        compress: true,
        open: true,
    },
}

export default config;