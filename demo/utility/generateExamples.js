const fs = require('fs')
console.log('hello')

console.log(fs.readdirSync('./src'))

const exampleTemplate = (name) =>
`import React from 'react'
import { ${name}, Code, Gutter } from '../../src'


const ${name}Example = () => {
  return (
    <div>
      <h2>Example</h2>
      <Code block={\`
        <${name} />
      \`}/>

      <h2>Demo</h2><Gutter/>

      <${name} />

    </div>
  )
}

export default ${name}Example
`

const sourcePath = './src'
const examplePath = './demo/examples'
const examples = fs.readdirSync(examplePath)
const sources = fs.readdirSync(sourcePath)

// Excludes
sources.splice(sources.indexOf('index.js'), 1)
sources.splice(sources.indexOf('config.js'), 1)
sources.splice(sources.indexOf('_utility'), 1)
sources.forEach((componentName) => {
  // console.log(componentName)
  // If blank example has not been maid yet
  if (!examples.includes(`${componentName}.js`)) {
    console.log('NEW example write:' + componentName);
    fs.writeFileSync(`${examplePath}/${componentName}.js`, exampleTemplate(componentName))
  }
})
