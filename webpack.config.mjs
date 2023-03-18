import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const config = {
	mode: 'development',
	entry: {
		index: './src/index.js',
		blog: './src/pages/blog/blog.js',
		portfolio: './src/pages/portfolio/portfolio.js',
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
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
			chunks: ['index'],
			inject: 'body',
		}),
		new HtmlWebpackPlugin({
			template: './src/pages/blog/blog.html',
			filename: 'blog.html',
			chunks: ['blog'],
			inject: 'body',
		}),
		new HtmlWebpackPlugin({
			template: './src/pages/portfolio/portfolio.html',
			filename: 'portfolio.html',
			chunks: ['portfolio'],
			inject: 'body',
		}),
		new MiniCssExtractPlugin({
			filename: 'styles.css',
		}),
	],
	devServer: {
		static: {
			directory: './dist',
		},
		historyApiFallback: {
			rewrites: [
				{ from: /^\/blog$/, to: '/blog.html' },
				{ from: /^\/portfolio$/, to: '/portfolio.html' },
				{ from: /./, to: '/index.html' },
			],
		},
		port: 3000,
	},
};

export default config;
