import typescript from 'rollup-plugin-typescript2';

const LIB_NAME = 'aurelia-loader-esm';
const externalLibs = [];
const cacheRoot = '.rollupcache';

export default [
  {
    input: 'src/index.ts',
    output: [
      { file: 'dist/es2018/index.js', format: 'es' }
    ],
    external: externalLibs,
    plugins: [
      typescript({
        cacheRoot: cacheRoot
      }),
    ]
  },
  // {
  //   input: 'src/index.ts',
  //   output: [
  //     { file: 'dist/es2015/index.js', format: 'es' }
  //   ],
  //   external: externalLibs,
  //   plugins: [
  //     typescript({
  //       useTsconfigDeclarationDir: false,
  //       tsconfigOverride: {
  //         compilerOptions: {
  //           target: 'es2015',
  //           declaration: false,
  //           declarationDir: null
  //         }
  //       },
  //       cacheRoot: cacheRoot
  //     }),
  //   ]
  // },
  // {
  //   input: 'src/index.ts',
  //   output: [
  //     { file: 'dist/commonjs/index.js', format: 'cjs' },
  //     { file: 'dist/amd/index.js', format: 'amd', amd: { id: LIB_NAME } },
  //     { file: 'dist/native-modules/index.js', format: 'es' }
  //   ],
  //   external: externalLibs,
  //   plugins: [
  //     typescript({
  //       useTsconfigDeclarationDir: false,
  //       tsconfigOverride: {
  //         compilerOptions: {
  //           target: 'es5',
  //           declaration: false,
  //           declarationDir: null
  //         }
  //       },
  //       cacheRoot: cacheRoot
  //     }),
  //   ]
  // }
]
