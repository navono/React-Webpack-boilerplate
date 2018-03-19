# react-boilerplate

A boilerplate project for `React`. Still continues Improvement.

## Note
`AntD` UI库使用离线iconfont时，使用的`less`版本应该在 __`v3.x`__ 以下，建议使用`v2.7.2`。否则在`webpack`打包时会出错。详细见[issue](https://github.com/less/less.js/issues/3113)

## Features
- [x] React
- [x] Webpack3
- [x] webpack-dev-server
- [x] react-hot-loader
- [x] redux
- [x] router
  > Note: With `react-router` v4.0+ (`react-router` contained in `react-router-dom`), `react-router-redux` must be `v5` above.
<br>Install with `yarn add react-router-redux@next`
- [x] test
  > Coverage: yarn test -- --coverage
- [x] VS Code debug
  <br>__`Launch`__
  
  Start with `F5`

  __`Attach`__
  
  Before start Chrome, need add `debug` option (launched in debug mode):

    >chrome.exe --remote-debugging-port=9222
  
  then open a new Tab, input `localhost:3000`, execute `Attach app` in VS Code Debug page.
- [x] Add `simple-react` branch, this branch without `Redux` and `Router`
