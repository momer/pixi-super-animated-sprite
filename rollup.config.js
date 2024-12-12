import typescript from '@rollup/plugin-typescript';
import { defineConfig } from 'rollup';
import { dts } from "rollup-plugin-dts";
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

const rollupConfig = defineConfig([
    {
        input: 'src/index.ts',
        output: [
            {
                dir: 'dist',
                format: 'cjs',
                entryFileNames: 'index.cjs.js',
                sourcemap: true
            },
            {
                dir: 'dist',
                format: 'esm',
                entryFileNames: 'index.esm.js',
                sourcemap: true
            }
        ],
        plugins: [
            nodeResolve({modulesOnly: true}),
            commonjs(),
            typescript({
                tsconfig: './tsconfig.json',
                declaration: true,
                declarationDir: 'dist',
            })
        ]
    },
    {
        input: "./dist/index.d.ts",
        output: [{file: "dist/index.d.ts", format: "es"}],
        plugins: [dts()],
    }
]);

export default rollupConfig;

