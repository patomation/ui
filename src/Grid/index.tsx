import * as React from 'react'
import * as PropTypes from 'prop-types'
import { FunctionComponent, ReactNode } from 'react'
import styles from './styles'
import concat from '../_utility/concat'
import extract from '../_utility/extract' // eslint-disable-line

interface Props {
  children?: [ReactNode] | ReactNode
  className?: string
  background?: string
  color?: string
  style?: object
  col?: number
  row?: number
  gap?: string | boolean
  auto?: boolean
  breakWidth?: string
  onMouseEnter?: () => void
  onMouseLeave?: () => void
  top?: boolean
}
/**
* gridifies any set of elements
*/
const Grid: FunctionComponent<Props> = ({
  className, children,
  background, color, style,
  col = 1, row = 1, gap = false, auto,
  onMouseEnter, onMouseLeave,
  breakWidth,
  top
}) => {
  // auto columns
  if (auto) {
    col = React.Children.count(children) || 1
    gap = true
  }
  // We have to subtract the gap amount for each column
  const {
    number: gapNumber,
    unit: gapUnit
  } = extract(
    gap === true
      ? '1rem'
      : gap === false
        ? '0px'
        : gap)
  const subtractGap = gap
    ? `${((gapNumber * (col - 1)) / col)}${gapUnit}`
    : null

  const width = 100 / col
  const height = 100 / row // TODO actually have row prop do something

  const repeat = (amount: number, string: string): string => {
    let content = ''
    for (var i = 0; i < amount; i++) {
      content += `${string} ` // add a space behind
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
        ...(top ? { justifyContent: 'flex-start' } : null),
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

if (process.env.NODE_ENV !== 'production') {
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
    onMouseLeave: PropTypes.func,
    /**
    * Align grid items to the top if true
    **/
    top: PropTypes.bool
  }
}

export default Grid
