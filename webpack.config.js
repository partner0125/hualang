// Learn more on how to config.
// - https://github.com/ant-tool/atool-build#配置扩展

module.exports = function (webpackConfig) {
  webpackConfig.babel.plugins.push('transform-runtime');
  webpackConfig.module.loaders.push({
    test: /\.scss/,
    loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded'
  });
  return webpackConfig;
};
