# Qzr's vue2-tpl

基于 vuecli 4.5.6

## 功能

### 1. postcss-pxtorem + lib-flexible 自适应 rem

.postcssre.js 文件中配置设计图尺寸

- postcss-pxtorem: 自动转化 px 为 rem
- lib-flexible: 自动更改根 font-size

### 2. eslint 自动美化代码

.eslintrc.js 文件进行配置

### 3. 配置共用 stylus

vue.config.js 中 style-resources-loader 进行配置

### 4. 配置api

在/api/modules文件夹下进行配置 将会自动挂载到this.$api下

### 5. 配置mock

在/mock/templates下进行配置返回值

### 6. 配置axios

在/common/axios里配置axios拦截器

## 通用代码块

1. router/guard

    router 守卫公用代码

2. store/modules/index

   require.context 自动化引入模块
