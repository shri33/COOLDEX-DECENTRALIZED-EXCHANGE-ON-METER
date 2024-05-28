const path = require('path');

module.exports = {
  // Other webpack configuration options...
  resolve: {
    alias: {
      '@contracts': path.resolve(__dirname, 'path/to/contracts/directory'),
    },
  },
};
resolve: {
  extensions: ['.js', '.json'],
}
