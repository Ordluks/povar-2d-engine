const path = require('path')


module.exports = {
	entry: './dev/test.js',
	output: {
		path: path.resolve(__dirname, 'dev'),
		filename: 'dev.bundle.js'
	},
	mode: 'development',

	module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },

	devServer: {
		static: {
      directory: path.join(__dirname, 'dev')
    },
		client: {
      logging: 'none',
    },
		open: true,
		compress: true,
		port: 3000,
	}
}