# チャットアプリ

プロジェクトを作成したら`vue.config.js`をルートに作成して以下を追加
```javascript
module.exports = {
    // options...
    devServer: {
        disableHostCheck: true
    }
}
```

## フォルダの構成
./componentsフォルダ : コンポーネントを入れる
./viewsフォルダ : 表示する画面の場所を設定
router.js : ページ遷移先の設定


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
