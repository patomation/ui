import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import localResolve from 'rollup-plugin-local-resolve' // allows folder imports ../Test instead of having to do ../Test/index.js
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import filesize from 'rollup-plugin-filesize'
import commonjs from 'rollup-plugin-commonjs'
import autoprefixer from 'autoprefixer'
import typescript from '@rollup/plugin-typescript'

module.exports = {
  input: './src/index.ts',
  output: {
    file: './lib/index.esm.js',
    format: 'esm',
    sourcemap: true
  },
  external: [
    'react',
    'react-dom',
    'prop-types',
    '@patomation/find',
    '@patomation/usetoggle',
    'react-pose'
  ],
  plugins: [
    typescript(),
    peerDepsExternal(),
    postcss({ extract: true, plugins: [autoprefixer] }),
    babel({ exclude: 'node_modules/**' }),
    localResolve(),
    resolve(),
    commonjs(),
    filesize()
  ]
}
