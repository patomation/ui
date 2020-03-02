const fs = require('fs')
const path = require('path')

console.log('Make Read Me Files')

const srcDir = './src'

const items = fs.readdirSync(srcDir)

const readmeTemplate = (name) => `
${name} example:

\`\`\`js
<${name} />

\`\`\`
`

items.forEach((item) => {
  if (item.includes('.ts') || item.includes('_utility')) {
    // ignore these
  } else {
    // do stuff with components
    console.log(readmeTemplate(item))

    fs.writeFileSync(path.join(srcDir, item, 'readme.md'), readmeTemplate(item), 'utf8')
  }
})
