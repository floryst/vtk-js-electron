const path = require('path');
module.exports = {
  mode: 'development',
  // needed to avoid unsafe-eval
  devtool: 'source-map',
  output: {
    filename: 'renderer.js',
  },
};
