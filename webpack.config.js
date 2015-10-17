module.exports = {
	entry: './js/main.js',
	output: {
		filename: './js/bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			//{ test: /\.less$/, loader: 'style-loader!css-loader!less-loader' }, // use ! to chain loaders
			{ test: /\.css$/, loader: 'style!css' },
			{ test: /\.(png|jpeg|jpg|gif|svg)$/i, loaders:
				[
					'file?hash=sha512&digest=hex&name=[hash].[ext]',
					'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
				] } // inline base64 URLs for <=8k images, direct URLs for the rest
		]
	}
};
