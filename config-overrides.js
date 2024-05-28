const path = require('path');

module.exports = function override(config, env) {
  config.resolve.alias = {
    ...config.resolve.alias,
    '@contracts': path.resolve(__dirname, '../build/contracts')
  };

  config.module.rules.push({
    test: /\.js$/,
    include: [
      path.resolve(__dirname, 'src'),
      path.resolve(__dirname, '../build/contracts')
    ],
    loader: 'babel-loader'
  });

  return config;
};

