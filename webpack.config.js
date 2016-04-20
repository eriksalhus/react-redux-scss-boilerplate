module.exports = {
  entry: [
    // 'webpack-dev-server/client?http://localhost:8080',
    // 'webpack/hot/only-dev-server',
    './app/bootstrap.jsx'
  ],
  output: {
    filename: 'build/bundle.js',
  },
  module: {
    devtool: "inline-source-map", // or "inline-source-map"
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel?presets[]=react,presets[]=es2015',
        exclude: /(node_modules|bower_components)/
      }, {
        test: /\.scss$/,
        loaders: ["style", "css?sourceMap", "sass?sourceMap"]
      }
    ],
  },
};
