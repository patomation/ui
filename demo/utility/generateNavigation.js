/* eslint-disable */
const fs = require('fs')
console.log('hello')

console.log(fs.readdirSync('./src'))

const template = (content) =>
`import React from 'react'
import { Grid, Brand, Hr, Button } from '../../src'
import { Link } from 'react-router-dom'

const Navigation = () =>
<Grid gap>
<Link to='/'><Brand> UI </Brand></Link>
<Hr/>
${content}
</Grid>

export default Navigation
`

const sourcePath = './src'
const sources = fs.readdirSync(sourcePath)

// Excludes
sources.splice(sources.indexOf('index.js'), 1)
sources.splice(sources.indexOf('config.js'), 1)
sources.splice(sources.indexOf('_utility'), 1)

let content = ''

sources.forEach((componentName) => {
  content += `<Link to={'/${componentName}'} key={'navigation-link-${componentName}'}><Button kind='none'> ${componentName} </Button></Link>\r\n`
  console.log(`'${componentName}',`)
})
fs.writeFileSync('./demo/components/Navigation.js', template(content))
