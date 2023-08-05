import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildScssLoaders } from './loaders/buildScssLoaders';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
	const svgLoader = {
		test: /\.svg$/,
		use: ['@svgr/webpack'],
	};

	const mediaLoader = {
		test: /\.(png|jpe?g|gif)$/i,
		use: [
			{
				loader: 'file-loader',
			},
		],
	};
	const scssLoader = buildScssLoaders(isDev);

	const typescriptLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	};

	return [mediaLoader, svgLoader, typescriptLoader, scssLoader];
}
