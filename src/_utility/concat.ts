type Concat = ([string]) => string

// Concatinate strings with spaces used for ClassNames
// Usage: join('my-cool-class', ClassName)
// If classname is undefined it does not get included
const concat = function (...strings) {
  return Object.entries(strings).reduce((acc, [key, value]) => {
    if (value) acc.push(value) // if value defined
    return acc
  }, []).join(' ')
}

export default concat
