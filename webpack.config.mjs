import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const config = {
	mode: 'development',
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	watch: true,
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
			{
				test: /\.s[ac]ss$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: 'index.html',
			inject: 'body',
		}),
		new HtmlWebpackPlugin({
			template: './src/app/pages/blog.html',
			filename: 'blog.html',
		}),
		new MiniCssExtractPlugin({
			filename: 'styles.css',
		}),
	],
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		port: 9000,
	},
};

export default config;
