var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './src/main.js',   // the entry point of our file, where to start building
  output: {
    path: path.resolve(__dirname, './dist'),   // need an absolute file name for path
    publicPath: '/dist/',  // public path for webpack dev server implementation
    filename: 'build.js'  // name of file to be built
  },
  module: {
    rules: [
      {
        test: /\.css$/,  // regex - take all css files 
        use: [
	  'vue-style-loader', // convert these loaded css files to be put into the .vue files
          'css-loader'   // first load the css files (from the import statements)
        ],
      },      {
        test: /\.vue$/,  // regex - take all .vue files
        loader: 'vue-loader',  // load them all to be built into the one file
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
      {
	  test: /\.js$/,  // same but converts ES6 to ES5 to be run in all browsers
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({  // plugin that allows for minification of js
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
