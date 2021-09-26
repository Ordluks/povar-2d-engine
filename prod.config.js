const path = require('path')


module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'povar2d.dist.js'
	},
	mode: 'production',

	module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'scss-loader'],
      },
    ],
  },
}