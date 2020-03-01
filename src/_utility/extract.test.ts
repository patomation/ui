import extract from './extract'

describe('extract utility', () => {
  it('extracts number from string', () => {
    const extracted = extract('1rem')
    expect(extracted.number).toEqual(1)
    expect(extracted.unit).toEqual('rem')
  })
})
