import React from 'react'
import styles from './styles.js'

const Grid = ({
  className, children,
  background, color, style,
  col, row, gap,
  onMouseEnter, onMouseLeave
}) => {
  // Extract number and unit
  const extract = (string) => {
    const number = string.match(/\d+/)[0]
    const unit = string.replace(number, '')
    return {
      number,
      unit
    }
  }

  // We have to subtract the gap amount for each column
  const subtractGap = gap ? ((extract(gap).number * (col - 1)) / col) + extract(gap).unit : null

  const width = 100 / col
  const height = 100 / row // TODO actually have row prop do something

  const repeat = (amount, string) => {
    let content = ''
    for (var i = 0; i < amount; i++) {
      content += (string + ' ')
    }
    return content
  }

  return (
    <div
      className={`grid ${className || ''}`}
      style={{
        ...styles.container,
        ...{
          gridGap: (gap || '0'),
          gridTemplateColumns: repeat(col, (subtractGap ? `calc(${width}% - ${subtractGap})` : `${width}%`)),
          gridTemplateRows: repeat(row, (subtractGap ? `calc(${height}% - ${subtractGap})` : `${height}%`))
        },
        ...(background ? { background: background } : null),
        ...(color ? { color: color } : null),
        ...style
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}>

      {children}

    </div>
  )
}

export default Grid
