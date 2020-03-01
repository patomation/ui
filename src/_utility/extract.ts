type Extract = (arg0: string) => {
  number: number
  unit: string
}

const extract: Extract = (string) => {
  const number = string ? parseFloat(string.match(/\d+/)[0]) : 0
  const unit = string ? string.replace(`${number}`, '') : ''
  return {
    number,
    unit
  }
}

export default extract
