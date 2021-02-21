const path = require('path')

module.exports = {
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.json', '.svelte'],
    alias: {
      '~public': path.resolve(__dirname, './public'),
      '~components': path.resolve(__dirname, './src/components'),
      '~css': path.resolve(__dirname, './src/assets/css'),
      '~pages': path.resolve(__dirname, './src/pages'),
      '~src': path.resolve(__dirname, './src'),
    },
  },
}
