const extract = (string) => {
  const number = string ? parseFloat( string.match(/\d+/)[0] ) : null
  const unit = string ? string.replace(number, '') : null
  return {
    number,
    unit
  }
}

export default extract
