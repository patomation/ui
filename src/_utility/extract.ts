type Extract = (arg0: string) => {
  number: number
  unit: string 
}

const extract: Extract = (string) => {
  const number = string ? parseFloat( string.match(/\d+/)[0] ) : null
  const unit = string ? string.replace(`${number}`, '') : null
  return {
    number,
    unit
  }
}

export default extract
