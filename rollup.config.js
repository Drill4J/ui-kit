import nodeResolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
    },
  ],
  external: [...Object.keys(pkg.dependencies || {})],
  plugins: [
    nodeResolve(),
    commonjs(),
    typescript({
      typescript: require('typescript'),
    }),
    postcss({
      modules: true,
    }),
    terser(),
  ],
};
