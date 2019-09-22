// Deep check of nested ojects
const deepCheck = (object, keys) => {
  // Reduce array of keys to boolean true or false
  // Loop through each key defined in the keys array and see if its defined
  return keys.reduce((acc, key) => {
    // If object had key acc true
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      // Mutate object to be next nested object
      object = object[key]
      // Set accumulator to true
      acc = true
    } else {
      // If key is not set accumulator to false
      acc = false
    }
    // Return accumulator each time.
    return acc
  }, false) // Default is false. unless changed to true
}

// Chose a check
const check = (object, keys) => {
  // Must be an object
  if (typeof object !== 'object') return false

  // Handle Array of keys
  if (typeof keys === 'object' && keys.length > 0) {
    return deepCheck(object, keys)

  // Parse string of keys ie object.key.key[0].key
  } else if (typeof keys === 'string') {
    // Covert string into array of keys and use deepCheck
    return deepCheck(
      object,
      keys.split('.').reduce((acc, key) => {
        // Support [0] array index braket props
        if (key.includes('[')) {
          acc.push(key.split('[')[0])
          acc.push(key.split('[')[1].replace(']', ''))
        } else {
          acc.push(key)
        }
        return acc
      }, [])
    )
  }

  // return false just in case
  return false
}

// export default check
module.exports = check
