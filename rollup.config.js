import typescript from '@rollup/plugin-typescript';
import workerLoader from 'rollup-plugin-web-worker-loader';

const config = [];
config.push({
    input: 'src/index.ts',
    output: {
        file: 'dist/index.js',
        format: 'iife',
        name: 'asdf',
        sourcemap: true,
    },
    plugins: [
        workerLoader({
            targetPlatform: 'browser',
            inline: false,
            preserveFileNames: true,
            loadPath: 'build',
        }),
        typescript(),
    ],
});
module.exports = config;
