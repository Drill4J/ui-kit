import babel from 'rollup-plugin-babel';
import nodeResolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import pkg from './package.json';
import svg from 'rollup-plugin-svg';

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
    nodeResolve({ extensions: ['.ts', '.tsx'] }),
    commonjs(),
    babel({
      extensions: ['.ts', '.tsx'],
      include: ['src/**/*'],
      exclude: 'node_modules/**',
    }),
    terser(),
    svg(),
  ],
};
