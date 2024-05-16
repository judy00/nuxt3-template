## Nuxt 3 Template

[Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction)

此為 Nuxt 3 專案模板，包含以下常用套件：
- SCSS
- Normalize.css
- Pinia
- Pinia Plugin Persist
- Day.js
- Element Plus Nuxt
- Nuxt I18n
- Nuxt Image
- Nuxt Icons
- SVGO

## Node Version
v20.10.0

## Setup

安裝 dependencies

```bash
yarn install
```

## Development Server

啟動 development server

```bash
yarn dev
```

## Production

打包專案

```bash
yarn build
```


本機預覽生產環境結果

```bash
yarn preview
```

## opt-svg 指令使用說明

開發時若需要新增 SVG Icon 檔案，會需要透過 [SVGO](https://github.com/svg/svgo) 最佳化檔案，請按以下步驟處理：

1. 將 SVG 檔案放置於 `assets/icons` 資料夾中
2. 使用指令 `yarn opt-svg` 進行最佳化

    ```
    yarn opt-svg [options] <file1.svg> <file2.svg> ...
    ```

    ### 參數
    - `<file.svg>`: 指定一個或多個最佳化的 SVG 檔案名稱。檔案應位於 `assets/icons` 資料夾中

    - `--keepFill`: 保留 SVG 檔案中的所有 fill 填色屬性。沒有此參數時，預設會將 fill 屬性移除，方便透過 CSS 控制 SVG 顏色，適用於大多數 Icon 情況，若遇到 Logo 或特殊情況需要保留 fill 屬性，請加上此參數

    ### 範例
    - 最佳化 `add.svg` 與 `eye.svg` 檔案，預設移除 fill 屬性

        ```
        yarn opt-svg add.svg eye.svg
        ```
    - 最佳化 `logo.svg` 檔案，保留 fill 屬性

        ```
        yarn opt-svg --keepFill logo.svg
        ```
