
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const parserOptions = {}

const propParser = require('react-docgen-typescript')
  .withCustomConfig(
    './tsconfig.json',
    [parserOptions]
  )
  .parse

module.exports = {
  components: 'src/**/*.tsx',
  propsParser: propParser,
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          loader: 'ts-loader'
        }
      ]
    },
    resolve: {
      extensions: ['.ts', '.tsx']
    },
    plugins: [
      new BundleAnalyzerPlugin({
        statsOptions: {
          exclude: /node_modules/
        },
        openAnalyzer: false
      })
    ]
  }
}
