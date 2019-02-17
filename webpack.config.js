const path = require('path');

module.exports = [
  {
    mode: process.env.NODE_ENV,
    entry: path.resolve(__dirname, 'src/lib/hubspot-ajax-forms.js'),
    output: {
      path: path.resolve(__dirname, 'dist/lib/'),
      filename: 'hubspot-ajax-forms.js',
    },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            }
          },
        },
      ],
    },
    devtool: 'source-map',
  },
  {
    mode: process.env.NODE_ENV,
    entry: path.resolve(__dirname, 'src/test.js'),
    output: {
      path: path.resolve(__dirname, 'dist/'),
      filename: 'test.js',
    },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            }
          },
        },
      ],
    },
    devtool: 'source-map',
  }
];
