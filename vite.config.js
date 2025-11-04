import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import mdx from '@mdx-js/rollup'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import remarkGfm from 'remark-gfm'

export default defineConfig({
  plugins: [
    vue(),
    mdx({
      jsxImportSource: 'vue',
      remarkPlugins: [
        remarkMath,
        remarkGfm,
      ],
      rehypePlugins: [
        rehypeKatex,
      ],
    }),
  ],
  base: '/ELEGANCE/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // 新增的媒体文件处理配置
  build: {
    assetsInlineLimit: 0, // 禁止内联媒体文件
    rollupOptions: {
      external: [
        /^\/ELEGANCE\/output_video\/.*/,
        /^\/ELEGANCE\/output_audio\/.*/
      ],
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.match(/\.(mp4|wav)$/)) {
            return 'assets/media/[name].[ext]' // 媒体文件特殊处理
          }
          return 'assets/[name].[ext]' // 其他资源保持原样
        }
      }
    }
  },
  server: {
    fs: {
      strict: false, // 允许访问项目外部路径
      allow: ['..'] // 允许访问上级目录
    }
  }
})
