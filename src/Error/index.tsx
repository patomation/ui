import * as React from 'react'
import * as PropTypes from 'prop-types'
import { FunctionComponent, ReactNode } from 'react'
import styles from './styles'
import concat from '../_utility/concat'

interface Props {
  children?: [ReactNode] | ReactNode
  className?: string
  onClick?: (MouseEvent) => {}
  background?: string
  color?: string
  style?: object
}
/**
* A Standardized error component to controll error styles globally
*/
const Error: FunctionComponent<Props> = ({
  className, children,
  onClick,
  background, color, style
}) =>

  <div
    onClick={onClick}
    className={concat('error', className)}
    style={{
      ...styles.container,
      ...(background ? { background: background } : null),
      ...(color ? { color: color } : null),
      ...style
    }}>

    {children}

  </div>

if (process.env.NODE_ENV !== 'production') {
  Error.propTypes = {
    /**
    * Exposes ability to set a custom class name
    **/
    className: PropTypes.string,
    /**
    * Individual component or set of components accepted as children
    **/
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    onClick: PropTypes.func,
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
    style: PropTypes.object
  }
}

export default Error
