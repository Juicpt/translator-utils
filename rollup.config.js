import typescript from "@rollup/plugin-typescript"
import resolve from '@rollup/plugin-node-resolve'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import commonjs from '@rollup/plugin-commonjs'
import { babel } from '@rollup/plugin-babel'
import bundleSize from 'rollup-plugin-bundle-size'
import terser from "@rollup/plugin-terser"

export default [{
    input: 'src/index.browser.ts',
    output: {
        file: 'dist/translator.js',
        format: 'umd',
        sourcemap: true,
        name: "translator",
        exports: "default"
    },
    plugins: [
        commonjs(),
        typescript({tsconfig: './tsconfig.rollup.json'}), 
        resolve({browser: true}), 
        peerDepsExternal('./package.json'),
        babel({
            babelHelpers: 'bundled',
            presets: ['@babel/preset-env']
        })
    ]
}, {
    input: 'src/index.browser.ts',
    output: {
        file: 'dist/translator.min.js',
        format: 'umd',
        sourcemap: true,
        name: "translator",
        exports: "default",
    },
    plugins: [
        commonjs(),
        typescript({tsconfig: './tsconfig.rollup.json'}), 
        resolve({browser: true}), 
        peerDepsExternal('./package.json'),
        babel({
            babelHelpers: 'bundled',
            presets: ['@babel/preset-env']
        }),
        terser(),
        bundleSize()
    ]
}, {
    input: 'src/index.ts',
    output: {
        file: 'dist/esm/translator.js',
        format: 'esm',
        sourcemap: true,
        name: "translator",
        exports: "named"
    },
    external: ['hpagent'],
    plugins: [
        typescript({tsconfig: './tsconfig.json'}), 
        resolve({browser: false}), 
        peerDepsExternal('./package.json')
    ]
}]
