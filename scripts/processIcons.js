const svgPaths = require('./svgPaths.js')
const fs = require('fs')

let indexContent = ''

const template = (name, path, size) => `
import { createIcon } from './createIcon/index'

export const ${name} = createIcon({
  name: '${name}',
  path: '${path}',
  size: '${size}'
})
`
const indexTemplate = (name) => `export { ${name} } from './${name}'\n`

Object.entries(svgPaths).map(([key, item]) => {
  let name = key.replace(/_([a-z])/g, function (g) { return g[1].toUpperCase() })
  name = name.charAt(0).toUpperCase() + name.slice(1)
  name = name.replace('_', '')
  name = name.replace('_26x24px', '')
  name = name.replace('_', 'x')
  const content = template(name, item.path, item.size)

  indexContent += indexTemplate(name)

  fs.writeFileSync(`./src/icons/${name}.ts`, content, 'utf8', () => {
    console.log('done')
  })
})

// write index file
fs.writeFileSync('./src/icons/index.ts', indexContent, 'utf8', () => {
  console.log('done')
})
