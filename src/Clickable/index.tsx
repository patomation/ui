import * as React from 'react'
import * as PropTypes from 'prop-types'
import styles from './styles'
import concat from '../_utility/concat'
/**
* Wraps anything and makes it clickable
*/
const Clickable = ({
  className, children,
  onClick,
  background, color, style,
  disabled
}) =>

  <div
    onClick={() => {
      if (onClick && !disabled) onClick()
    }}
    className={concat('clickable', className)}
    style={{
      ...styles.container,
      ...(disabled ? styles.disabled : null),
      ...(background ? { background: background } : null),
      ...(color ? { color: color } : null),
      ...style
    }}>

    {children}

  </div>

if (process.env.NODE_ENV !== 'production') {
  Clickable.propTypes = {
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
    style: PropTypes.object,
    disabled: PropTypes.bool
  }
}

export default Clickable
