const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = [
  {
    mode: process.env.NODE_ENV,
    entry: path.resolve(__dirname, 'src/lib/HubspotAjaxForm.js'),
    output: {
      path: path.resolve(__dirname, 'dist/'),
      filename: 'hubspot-ajax-forms.js',
      library: 'HubspotAjaxForms',
      libraryTarget: 'umd',
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
    optimization: {
      minimizer: process.env.NODE_ENV === 'production' ? [new UglifyJsPlugin()] : [],
    },
  },
  {
    mode: process.env.NODE_ENV,
    entry: path.resolve(__dirname, 'src/client-instance-test.js'),
    output: {
      path: path.resolve(__dirname, 'test/'),
      filename: 'client-instance-test.build.js',
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
