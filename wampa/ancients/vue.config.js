module.exports = {
  outputDir: 'dist',
  assetsDir: 'static',
  devServer: {
    historyApiFallback: true,
    port: 4000,   // you can change the port there
    noInfo: true,
    overlay: true
  },
}
