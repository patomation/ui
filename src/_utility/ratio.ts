type Ratio = (number: number, exponent: number) => number

interface Ratios {
  [key: string]: number
}

const ratios: Ratios = {
  'golden-ratio': 1.618,
  'augmented-forth': 1.414,
  'perfect-forth': 1.333,
  'major-third': 1.250,
  'major-seccond': 1.125,
  'minor-third': 1.18921,
  'minor-second': 1.059
}

const ratio: Ratio = (number, exponent = 1) => {
  return number * Math.pow(ratios['perfect-forth'], exponent)
}

export default ratio
