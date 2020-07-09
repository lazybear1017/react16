module.exports = {
  pages: {
    index: {
      entry: './src/index.js',
      template: './public/index.html'
    }
  },
  themes: ['white', 'blue'],
  alias: {
    '@': './src'
  },
  proxy: {
    context: ['/tenant/**', '/api/**', '/notify/**', '/frontend/**'],
    target: 'http://newprod.dev.cn/'
  },
  configureWebpack: {
    resolve: {
      extensions: ['.ts', '.tsx', '.js']
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loaders: ['babel-loader', 'ts-loader']
        }
      ]
    }
  }
}
