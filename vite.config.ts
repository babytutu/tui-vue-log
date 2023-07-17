import { defineConfig } from 'vite'
// 导入版权注释插件
import banner from 'vite-plugin-banner'
import pkg from './package.json'
import babel from '@rollup/plugin-babel'
import eslint from 'vite-plugin-eslint'

export default defineConfig({
  plugins: [
    eslint({
      include: ['src/*.ts'],
    }),
    banner(
      `/**\n * name: ${pkg.name}\n * version: v${pkg.version}\n * description: ${pkg.description}\n * author: ${pkg.author}\n * homepage: ${pkg.homepage}\n */`
    ),
    babel({
      extensions: ['.js', '.ts', '.vue'],
      babelHelpers: 'bundled',
      presets: [['@babel/preset-env']],
    }),
  ],
  build: {
    // 输出目录
    outDir: 'dist',
    // 构建 npm 包时需要开启 “库模式”
    lib: {
      // 指定入口文件
      entry: 'src/index.ts',
      // 输出 UMD 格式时，需要指定一个全局变量的名称
      name: 'log',
      // 最终输出的格式，这里指定了三种
      formats: ['es', 'umd'],
      fileName: (format) => `index.${format}.js`,
    },
    emptyOutDir: true,
    // 压缩混淆构建后的文件代码
    minify: true,
  },
})
