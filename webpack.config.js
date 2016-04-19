module.exports = {
  entry: './app/bootstrap.jsx',
  output: {
    filename: 'build/bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel?presets[]=react,presets[]=es2015',
        exclude: /(node_modules|bower_components)/,
      },
    ],
  },
};
