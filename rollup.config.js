import babel from '@rollup/plugin-babel'
import postcss from 'rollup-plugin-postcss'
import svgr from '@svgr/rollup'
import url from 'rollup-plugin-url'
import commonjs from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'
import pkg from './package.json'

const extensions = ['.js', '.jsx']
const production = !process.env.ROLLUP_WATCH

module.exports = {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true
    }
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**',
      extensions,
      presets: [
        [
          '@babel/preset-env',
          {
            modules: false,
          }
        ],
        '@babel/preset-react'
      ]
    }),
    postcss({
      plugins: []
    }),
    nodeResolve({
      extensions: ['.css'],
      browser: true
    }),
    url(),
    svgr(),
    commonjs({
      include: 'node_modules/**',
      namedExports: {
        'node_modules/react/react.js': ['Children', 'Component', 'PropTypes', 'createElement'],
        'node_modules/react-dom/index.js': ['render']
      },
    }),
    production && terser(),
 ,
 ],
 external: ['react', 'react-dom'],
}