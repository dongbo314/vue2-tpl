module.exports = {
  plugins: {
    autoprefixer: {
      overrideBrowserslist: [
        'Android 4.1',
        'iOS 7.1',
        'Chrome > 31',
        'ff > 31',
        'ie >= 8'
      ]
    },
    'postcss-pxtorem': {
      rootValue: 1080, //
      // rootValue: 37.5, // 移动端根据设计图尺寸写，设计图是375，就写37.5
      propList: ['*'], // 需要被转换的属性
      selectorBlackList: [], // 不进行px转换的选择器
    },
  },
}