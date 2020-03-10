const fs = require('fs');
const tool = (api) => {
  return {
    deleteFile(path) {
      const file = api.resolve(path);
      if (fs.existsSync(file)) {
        fs.unlinkSync(file);
      }
    },
    deleteDir(path) {
      const dir = api.resolve(path);
      if (fs.existsSync(dir)) {
        fs.readdirSync(dir).forEach((o) => {
          const file = dir + '\\' + o;
          if (fs.statSync(file).isDirectory()) {
            fs.readdirSync(dir).forEach((p) => {
              fs.unlinkSync(dir + '\\' + o + '\\' + p);
            });
          } else {
            fs.unlinkSync(file);
          }
        });
        fs.rmdirSync(dir);
      }
    }
  };
};
module.exports = (api, options, rootOptions) => {
  const utils = tool(api);
  // 命令
  api.extendPackage({
    scripts: {
      "serve": "vue-cli-service serve",
      "build": "vue-cli-service build",
      "lint": "vue-cli-service lint"
    },
  });

  // 安装一些基础公共库
  api.extendPackage({
    dependencies: {
      "core-js": "^3.6.4",
      "terser-webpack-plugin": "^2.3.5",
      "vue": "^2.6.11",
      "vue-router": "^3.1.5",
      "vuex": "^3.1.2"
    },
    devDependencies: {
      "@vue/cli-plugin-babel": "~4.2.0",
      "@vue/cli-plugin-eslint": "~4.2.0",
      "@vue/cli-plugin-router": "~4.2.0",
      "@vue/cli-plugin-vuex": "~4.2.0",
      "@vue/cli-service": "~4.2.0",
      "@vue/eslint-config-prettier": "^6.0.0",
      "babel-eslint": "^10.0.3",
      "eslint": "^6.7.2",
      "eslint-plugin-prettier": "^3.1.1",
      "eslint-plugin-vue": "^6.1.2",
      "lint-staged": "^9.5.0",
      "prettier": "^1.19.1",
      "stylus": "^0.54.7",
      "stylus-loader": "^3.0.2",
      "vue-template-compiler": "^2.6.11"
    }
  });
  // 删除 vue-cli3 默认目录
  api.render(files => {
    Object.keys(files)
      .filter(path => path.startsWith('src/') || path.startsWith('public/'))
      .forEach(path => delete files[path])
  })
  api.render('../template');
  api.onCreateComplete(() => {
    process.env.VUE_CLI_SKIP_WRITE = true;
    // utils.deleteDir('./src/components');
    // utils.deleteDir('./src/assets');
  });
};
