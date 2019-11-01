import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'
import concat from '../_utility/concat.js'
import extract from '../_utility/extract.js' // eslint-disable-line

const Grid = ({
  className, children,
  background, color, style,
  col, row, gap,
  onMouseEnter, onMouseLeave,
  breakWidth
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
      className={concat('grid', className)}
      style={{
        ...styles.container,
        gridGap: (gap || '0'),
        gridTemplateColumns: repeat(col, (subtractGap ? `calc(${width}% - ${subtractGap})` : `${width}%`)),
        ...(breakWidth ? {
          gridTemplateColumns: `repeat(auto-fit, minmax(${extract(breakWidth).number / (col || 2)}${extract(breakWidth).unit}, 1fr))`
        } : null),
        ...(row ? {
          gridTemplateRows: repeat(row, (subtractGap ? `calc(${height}% - ${subtractGap})` : `${height}%`))
        } : null),
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

Grid.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  background: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object,
  col: PropTypes.number,
  row: PropTypes.number,
  gap: PropTypes.string,
  breakWidth: PropTypes.string,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func
}

export default Grid
