import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'
import concat from '../_utility/concat.js'
/**
* A Standardized error component to controll error styles globally
*/
const Error = ({
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

Error.propTypes = {
  /**
  * Exposes ability to set a custom class name
  **/
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  onClick: PropTypes.func,
  background: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object
}

export default Error
