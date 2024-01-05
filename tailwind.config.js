/** @type {import('tailwindcss').Config} */
module.exports = {
  // 这里给出了一份 taro 通用示例，具体要根据你自己项目的目录结构进行配置
  // 比如你使用 vue3 项目，你就需要把 vue 这个格式也包括进来
  // 不在 content glob表达式中包括的文件，在里面编写tailwindcss class，是不会生成对应的css工具类的
  content: ["./public/index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
  // 其他配置项 ...
  corePlugins: {
    // 小程序不需要 preflight，因为这主要是给 h5 的，如果你要同时开发多端，你应该使用 process.env.TARO_ENV 环境变量来控制它
    preflight: false
  },
  theme: {
    extend: {
      fontSize: {
        xs: "24px",
        sm: "26px",
        base: "28px",
        xl: "30px",
        "2xl": "32px",
        "3xl": "34px",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
        large: "40px"
      },
      colors: {
        gray: "#CECECE",
        primary: "#00499D",
        red: "#F84D4D"
      },
      textColor: {
        normal: "#333333"
      },
      backgroundColor: {
        gray: "D9D9D9",
        under: "#F6F6F6"
      },
      borderColor: {
        gray: "#CECECE",
        ID: "#E0E0E0"
      }
    }
  }
};
