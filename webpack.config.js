const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
	entry: path.join(__dirname, "src", "index.tsx"),
	output: {
		path: path.join(__dirname, "build"),
		filename: "index.bundle.js",
		publicPath: process.env.PUBLIC_URL,
	},
	mode: process.env.NODE_ENV || "development",
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	},
	devServer: {
		static: {
			directory: path.join(__dirname, "src"),
		},
		compress: true,
		port: 9000,
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ["babel-loader"],
			},
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				use: ["ts-loader"],
			},
			{
				test: /\.(css)$/,
				use: [{ loader: "css-loader" }],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, "src", "index.html"),
		}),
		new Dotenv(),
	],
};
