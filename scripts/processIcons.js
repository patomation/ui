const svgPaths = require('./svgPaths.js')
// const fs = require('fs')

let content = `
import { createIcon } from './createIcon/index'

`

const template = (name, path, size) => `
export const ${name} = createIcon({
  name: '${name}',
  path: '${path}',
  size: '${size}'
})
`
Object.entries(svgPaths).map(([key, item]) => {
  // console.log(key)

  let name = key.replace(/_([a-z])/g, function (g) { return g[1].toUpperCase() })
  name = name.charAt(0).toUpperCase() + name.slice(1)
  console.log(name)
  content += template(name, item.path, item.size)
})
// fs.writeFileSync('./src/icons/myIcons.ts', content, 'utf8', () => {
//   console.log('done')
// })
console.log(content)
