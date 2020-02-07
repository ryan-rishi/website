const path = require('path');

module.exports = {
  entry: {
    'loudness-wars': './webpack/loudness-wars.js'
  },
  output: {
    path: path.resolve(__dirname, 'src/assets/javascript/'),
    filename: '[name].js'
  }
};