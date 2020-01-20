import extract from './extract'

type Declaration = (arg0: string, arg1: string) => string
type ObjToCssDeclarationString = (arg0: object) => string
type ObjToCssRuleString = (arg0: object) => string
type Query = (arg0: string | undefined, arg1: string | undefined) => string
type MediaQuery = (arg0: { 
  min?: string,
  max?: string,
  css: object
}) => string

const declaration: Declaration = (property, value) =>
  `${property}: ${value};`

const objToCssDeclarationString: ObjToCssDeclarationString = (props) =>
  Object.entries(props).reduce((acc: any[], [property, value]) => {
    // convert camelCase to dashes
    property = property.replace(/[A-Z]/g, letter => '-' + letter.toLowerCase())
    acc.push(declaration(property, value))
    return acc
  }, []).join('\n')

const objToCssRuleString: ObjToCssRuleString = (css) =>
  Object.entries(css).reduce((acc: any[], [selector, declarations]) => {
    acc.push(`
      ${selector} {
        ${objToCssDeclarationString(declarations)}
      }
    `)
    return acc
  }, []).join('\n')

const query: Query = (min, max) =>
  [
    min ? `(min-width: ${min})` : '',
    min && max ? 'and' : '',
    max ? `(max-width: ${extract(max).number - 1}${extract(max).unit})` : ''
  ].join(' ')

const mediaQuery: MediaQuery = ({ min, max, css }) => {
  return `
  @media ${query(min, max)} {
    ${objToCssRuleString(css)}
  }
  `
}

export default mediaQuery
