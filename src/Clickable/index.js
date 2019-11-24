import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'
import concat from '../_utility/concat.js'
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

Clickable.propTypes = {
  /**
  * Exposes ability to set a custom class name
  **/
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  onClick: PropTypes.func,
  background: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object,
  disabled: PropTypes.bool
}

export default Clickable
