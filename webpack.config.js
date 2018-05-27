module: {
  rules: [
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    },
    {
      test: /\.ng$/
      use: [
        {
          loader: path.resolve('lib/loader.js'),
          options: {/* ... */}
        }
      ]
    }
  ]
}