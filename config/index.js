import { defineConfig } from "@tarojs/cli";
import path from "path";
import devConfig from "./dev";
import prodConfig from "./prod";
import { UnifiedWebpackPluginV5 } from "weapp-tailwindcss/webpack";

// https://taro-docs.jd.com/docs/next/config#defineconfig-辅助函数
export default defineConfig(async (merge, { command, mode }) => {
  const baseConfig = {
    plugins: ["@taro-hooks/plugin-react", "@taro-hooks/plugin-auto-import"],
    projectName: "qilu-gift-medicine-mp",
    date: "2023-12-17",
    designWidth: 375,
    deviceRatio: {
      640: 2.34 / 4,
      750: 0.5,
      375: 1,
      828: 1.81 / 4
    },
    sourceRoot: "src",
    outputRoot: "dist",
    defineConstants: {},
    copy: {
      patterns: [],
      options: {}
    },
    framework: "react",
    compiler: "webpack5",
    cache: {
      enable: true // Webpack 持久化缓存配置，建议开启。默认配置请参考：https://docs.taro.zone/docs/config-detail#cache
    },
    alias: {
      src: path.resolve(__dirname, "..", "src"),
      "@": path.resolve(__dirname, "..", "src")
    },
    mini: {
      miniCssExtractPluginOption: {
        ignoreOrder: true
      },
      postcss: {
        pxtransform: {
          enable: true,
          config: {}
        },
        url: {
          enable: true,
          config: {
            limit: 1024 // 设定转换尺寸上限
          }
        },
        cssModules: {
          enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
          config: {
            namingPattern: "module", // 转换模式，取值为 global/module
            generateScopedName: "[name]__[local]___[hash:base64:5]"
          }
        }
      },
      webpackChain(chain) {
        chain.merge({
          plugin: {
            install: {
              plugin: UnifiedWebpackPluginV5,
              args: [
                {
                  appType: "taro"
                }
              ]
            }
          }
        });
      }
    },
    h5: {
      publicPath: "/",
      staticDirectory: "static",
      output: {
        filename: "js/[name].[hash:8].js",
        chunkFilename: "js/[name].[chunkhash:8].js"
      },
      miniCssExtractPluginOption: {
        ignoreOrder: true,
        filename: "css/[name].[hash].css",
        chunkFilename: "css/[name].[chunkhash].css"
      },
      postcss: {
        autoprefixer: {
          enable: true,
          config: {}
        },
        cssModules: {
          enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
          config: {
            namingPattern: "module", // 转换模式，取值为 global/module
            generateScopedName: "[name]__[local]___[hash:base64:5]"
          }
        }
      }
    },
    rn: {
      appName: "taroDemo",
      postcss: {
        cssModules: {
          enable: false // 默认为 false，如需使用 css modules 功能，则设为 true
        }
      }
    }
  };
  if (process.env.NODE_ENV === "development") {
    // 本地开发构建配置（不混淆压缩）
    return merge({}, baseConfig, devConfig);
  }
  // 生产构建配置（默认开启压缩混淆等）
  return merge({}, baseConfig, prodConfig);
});
