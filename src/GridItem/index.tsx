import * as React from 'react'
import * as PropTypes from 'prop-types'
import { FunctionComponent, ReactNode } from 'react'
import styles from './styles'
import concat from '../_utility/concat'

interface Props {
  children?: [ReactNode] | ReactNode
  className?: string
  style?: object
  start?: number
  end?: number
  span?: number
}

/**
* A block level component that is used inside of the grid component that gives you the option
* to use span columns so you can set the width of the item to
* span multiple columns and what not.
**/
const GridItem: FunctionComponent<Props> = ({
  className, children, style,
  start, end, span
}) =>

  <div
    className={concat('grid-item', className)}
    style={{
      ...styles.container,
      ...(start ? { gridColumnStart: start } : null), // Optional in case we want to set these
      ...(end ? { gridColumnEnd: start } : null),
      ...(span ? { gridColumn: `${'auto' || start} / span ${span}` } : null),
      ...style
    }}>

    {children}

  </div>

if (process.env.NODE_ENV !== 'production') {
  GridItem.propTypes = {
    /**
    * Exposes ability to set a custom class name
    **/
    className: PropTypes.string,
    /**
    * Individual component or set of components accepted as children
    **/
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    /**
    * Set any styles of the top level element of the component
    **/
    style: PropTypes.object,
    /**
    * Set the grid-column-start property
    **/
    start: PropTypes.number,
    /**
    * Set the grid-column-end property
    **/
    end: PropTypes.number,
    /**
    * Sets the grid-column-start property to auto unless start defined.
    * Sets the grid-column-end property to 'span <number>'
    **/
    span: PropTypes.number
  }
}

export default GridItem
