/*
 * @Description: 配置文件 等同于 vue.config.js
 * @Author: 翁庆雨 <wqy.mail@foxmail.com>
 * @Date: 2021-02-01 09:48:43
 * @LastEditTime: 2021-04-16 17:19:26
 * @LastEditors: 翁庆雨  <wqy.mail@foxmail.com>
 * @FilePath: \wfs-lsd\vite.config.js
 */
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";

// vite.config.js # or vite.config.ts

module.exports = {
  // 引入第三方的配置
  // optimizeDeps: {
  //   include: ["echarts"]
  // },
  alias: {
    // 键必须以斜线开始和结束
    "@": resolve(__dirname, "./src"),
  },
  server: {
    port: 3000,
    // Load proxy configuration from .env
    // hmr: {
    //   overlay: true,
    // },
  },
  hostname: "localhost",
  // 是否自动在浏览器打开
  open: true,
  // 是否开启 https
  https: false,
  // 服务端渲染
  ssr: false,
  /**
   * 在生产中服务时的基本公共路径。
   * @default '/'
   */
  base: "./",
  plugins: [vue()],
  /**
   * 与“根”相关的目录，构建输出将放在其中。如果目录存在，它将在构建之前被删除。
   * @default 'dist'
   */
  // build: {
  //   assetsDir: "./static",
  //   rollupOptions: {
  //     input: {
  //       main: resolve(__dirname, "index.html"),
  //       bimPage: resolve(__dirname, "src/bimPage/index.html"),
  //     },
  //   },
  // },
  // 反向代理
  // proxy: {
  //   '/api': {
  //     target: 'https://blog.csdn.net/weixin_45292658',
  //     changeOrigin: true,
  //     rewrite: path => path.replace(/^\/api/, '')
  //   }
  // }
};
