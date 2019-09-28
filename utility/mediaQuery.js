import extract from './extract.js'

const declaration = (property, value) =>
  `${property}: ${value};`

const objToCssDeclarationString = (props) =>
  Object.entries(props).reduce((acc, [property, value]) => {
    // convert camelCase to dashes
    property = property.replace(/[A-Z]/g, letter => '-' + letter.toLowerCase())
    acc.push(declaration(property, value))
    return acc
  }, []).join('\n')

const objToCssRuleString = (css) =>
  Object.entries(css).reduce((acc, [selector, declarations]) => {
    acc.push(`
      ${selector} {
        ${objToCssDeclarationString(declarations)}
      }
    `)
    return acc
  }, []).join('\n')

const query = (min, max) =>
  [
    min ? `(min-width: ${min})` : '',
    min && max ? 'and' : '',
    max ? `(max-width: ${extract(max).number - 1}${extract(max).unit})` : ''
  ].join(' ')

const mediaQuery = ({ min, max, css }) => {
  return `
  @media ${query(min, max)} {
    ${objToCssRuleString(css)}
  }
  `
}

export default mediaQuery
