import path from 'path'
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import postcss from 'rollup-plugin-postcss'

import pkg from './package.json'

const rootDir = path.resolve(__dirname)

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
      strict: false,
    },
  ],
  plugins: [
    typescript({ objectHashIgnoreUnknownHack: true }),
    postcss({
      extensions: ['.css'],
    }),
  ],
  external: ['react', 'react-dom'],
}
