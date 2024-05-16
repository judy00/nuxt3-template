import path from 'path'
import fs from 'fs'
import { optimize } from 'svgo'

// SVG 檔案路徑
const basePath = path.join(process.cwd(), 'assets/icons')
const keepFill = process.argv.includes('--keepFill')
const fileNames = process.argv.slice(2).filter(arg => !arg.startsWith('--'))

// SVGO Config
const svgoConfig = {
  plugins: [
    'removeDimensions',
    {
      name: 'preset-default',
      params: {
        overrides: {
          removeViewBox: false
        }
      }
    },
    {
      name: 'removeAttrs',
      params: {
        attrs: 'fill'
      }
    }
  ]
}

if (keepFill) {
  svgoConfig.plugins = svgoConfig.plugins.filter(plugin => plugin.name !== 'removeAttrs')
}

if (fileNames.length < 1) {
  console.log('請指定至少一個 SVG 檔案名稱')
  process.exit(1)
}

fileNames.forEach((fileName) => {
  const filePath = path.join(basePath, fileName)
  try {
    // 讀取 SVG 檔內容
    const svgData = fs.readFileSync(filePath, 'utf8')
    console.log('svgData :>> ', svgData)

    // 使用 SVGO 最佳化 SVG 檔
    const result = optimize(svgData, svgoConfig)

    // 最佳化後的 SVG 寫回檔案
    fs.writeFileSync(filePath, result.data)
    console.log(`${fileName} 最佳化完成。`)
  } catch (error) {
    console.error(`處理 ${fileName} 時發生錯誤：${error}`)
  }
})
