const fs = require('fs')

//这是全部读取的操作
fs.readFile('./read.json', 'utf8', (err, data) => {
  if (err) throw err
  let obj = JSON.parse(data.trim())
  let keys = Object.keys(obj)
  let tmp = {}
  keys.forEach(item => {
    tmp[item] = `function(data){ return request.request_${obj[item].method}({serve:serverConfig.${obj[item].modules.toUpperCase()},url:api.${obj[item].modules.toLowerCase()}.${item},data})}`
  })
  fs.writeFile('./output.json', JSON.stringify(tmp), err => {
    if (err) throw err
    console.log('文件已被保存')
  })
})
