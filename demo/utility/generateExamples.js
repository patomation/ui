const fs = require('fs')
console.log('hello')

console.log(fs.readdirSync('./src'))

const exampleTemplate = (name) =>
`import React from 'react'
import { ${name}, Code, Gutter, Heading } from '../../src'


const ${name}Example = () => {
  return (
    <div>
      <Heading Tag='h2'>Example</Heading>
      <Code block={\`
        <${name} />
      \`}/>

      <Heading Tag='h2'>Demo</Heading>

      <${name} />

    </div>
  )
}

export default ${name}Example
`

const indexTemplate = (imports, content) =>
` import React from 'react'
import { Route } from 'react-router-dom'
${imports}

const Examples = () => <>
${content}
</>

export default Examples
`

const sourcePath = './src'
const examplePath = './demo/examples'
const examples = fs.readdirSync(examplePath)
const sources = fs.readdirSync(sourcePath)

// Excludes
sources.splice(sources.indexOf('index.js'), 1)
sources.splice(sources.indexOf('config.js'), 1)
sources.splice(sources.indexOf('_utility'), 1)

let indexImports = ''
let indexContent = ''

sources.forEach((componentName) => {
  // console.log(componentName)
  // If blank example has not been maid yet
  if (!examples.includes(`${componentName}.js`)) {
    console.log('NEW example write:' + componentName)
    fs.writeFileSync(`${examplePath}/${componentName}.js`, exampleTemplate(componentName))
  }
  indexImports += `import ${componentName} from './${componentName}'\r\n`
  indexContent += `<Route path={'/${componentName}'} component={${componentName}} key={'route-${componentName}'} />\r\n`
})
fs.writeFileSync(`${examplePath}/index.js`, indexTemplate(indexImports, indexContent))
