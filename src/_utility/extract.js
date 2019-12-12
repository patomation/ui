const extract = (string) => {
  const number = string ? string.match(/\d+/)[0] : null
  const unit = string ? string.replace(number, '') : null
  return {
    number,
    unit
  }
}

export default extract
