# vuepress-theme-default-rtl

> ✏️ RTL version for VuePress default theme.

Demo with dummy text:
[![preview](https://user-images.githubusercontent.com/13087224/77238366-e8c68680-6bec-11ea-8438-78ba4d407764.png)](https://github.com/Alizadeh118/vuepress-theme-default-rtl/)


## Installation


```shell
$ yarn add vuepress-theme-default-rtl --dev
# or
$ npm install vuepress-theme-default-rtl --save-dev
```

## Usage

Modify your `.vuepress/config.js` and provide the `theme` option.

```js
module.exports = {
  theme: 'default-rtl',
}
```

And that's some additional configs: (Optional) 
```js
module.exports = {
  theme: 'default-rtl',
  themeConfig: {
    persianDate: true, // used in last-update plugin
    lastUpdated: 'آخرین ویرایش',
    ...
  }
}
```

## License
[MIT License](https://alizadeh118.mit-license.org/)
