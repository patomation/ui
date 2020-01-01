import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'
import concat from '../_utility/concat.js'
import extract from '../_utility/extract.js' // eslint-disable-line
/**
* gridifies any set of elements
*/
const Grid = ({
  className, children,
  background, color, style,
  col, row, gap, auto,
  onMouseEnter, onMouseLeave,
  breakWidth
}) => {
  // auto columns
  if (auto) {
    col = children.length
    gap = true
  }
  // We have to subtract the gap amount for each column
  const { number, unit } = extract(gap === true ? '1rem' : gap)
  const subtractGap = gap
    ? ((number * (col - 1)) / col) + unit
    : null

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
        gridGap: (gap === true ? '1rem' : gap || '0'),
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
  /**
  * Exposes ability to set a custom class name
  **/
  className: PropTypes.string,
  /**
  * Individual component or set of components accepted as children
  **/
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  /**
  * The background color of component
  **/
  background: PropTypes.string,
  /**
  * The text color of component
  **/
  color: PropTypes.string,
  /**
  * Set any styles of the top level element of the component
  **/
  style: PropTypes.object,
  col: PropTypes.number,
  row: PropTypes.number,
  /**
  * using true the gap will be the default 1rem otherwise you can set the gap to a custom amount
  **/
  gap: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  /**
  *  when auto property is set the grid col will be determined by the amount of children. and gap will be on by default
  **/
  auto: PropTypes.bool,
  breakWidth: PropTypes.string,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func
}

export default Grid
