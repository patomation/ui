import React from 'react'

import PropTypes from 'prop-types'
import styles from './styles.js'

const Shape = ({
  className, children,
  onClick,
  background, color, style,
  square, circle
}) =>

  <div
    onClick={onClick}
    className={className}
    style={{
      ...styles.container,
      ...style
    }}>

    <div
      style={{
        ...styles.shape,
        ...(background ? { background: background } : null),
        ...(color ? { color: color } : null),
        ...(circle ? { borderRadius: '50%' } : null)
      }}>
      {children}
    </div>

  </div>

Shape.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  onClick: PropTypes.func,
  background: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object,
  square: PropTypes.bool,
  circle: PropTypes.bool
}

export default Shape