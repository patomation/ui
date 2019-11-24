import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'
import concat from '../_utility/concat.js'
/**
* A component for displaying code samples
*/
const Code = ({
  className, children, onClick,
  background, color, style
}) => {
  return (
    <div
      onClick={onClick}
      className={concat('code', className)}
      style={{
        ...styles.container,
        ...(background ? { background: background } : null),
        ...(color ? { color: color } : null),
        ...style
      }}>

      {children}

    </div>
  )
}

Code.propTypes = {
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

export default Code
