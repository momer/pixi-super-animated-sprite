import typescript from '@rollup/plugin-typescript';
import { defineConfig } from 'rollup';

const rollupConfig = defineConfig({
    input: 'src/index.ts',
    output: {
        dir: 'dist',
        format: 'cjs'
    },
    plugins: [typescript({
            tsconfig: './tsconfig.json',
            declaration: true,
            declarationDir: 'dist',
        }
    )]
});

export default rollupConfig;

