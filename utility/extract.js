const extract = (string) => {
  const number = string.match(/\d+/)[0]
  const unit = string.replace(number, '')
  return {
    number,
    unit
  }
}


export default extract
