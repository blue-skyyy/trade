// import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require("path")

// https://vitejs.dev/config/
// export default defineConfig({
//   resolve: {
//     alias: {
//       "/@/": path.resolve(__dirname, "..", "src"),
//       "/@utils/": path.resolve(__dirname, "/src/", "utils"),
//       "/@components/": path.resolve(__dirname, "src", "components")
//     },
//   },
//   // module: {
//   //   rules: [
//   //     {
//   //       test: /\.pug$/,
//   //       oneOf: [
//   //         {
//   //           resourceQuery: /^\?vue/,
//   //           use: ["pug-plain-loader"]
//   //         },
//   //         {
//   //           use: ["html-loader", "pug-html-loader"]
//   //         }
//   //       ]
//   //     }
//   //   ]
//   // },
//   plugins: [vue()]
// })



// https://blog.csdn.net/hbiao68/article/details/108972775
export default {
  resolve: {
    alias: {
      "/@": path.resolve(__dirname, "..", "src"),
      "/@utils": path.resolve(__dirname, "src", "utils"),
      "/@pages": path.resolve(__dirname, "src", "pages"),
      "/@components": path.resolve(__dirname, "src", "components")
    },
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        oneOf: [
          {
            resourceQuery: /^\?vue/,
            use: ["pug-plain-loader"]
          },
          {
            use: ["html-loader", "pug-html-loader"]
          }
        ]
      }
    ]
  },
  plugins: [vue()]
};
