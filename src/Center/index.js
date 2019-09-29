import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'
import concat from '../../utility/concat.js'

const Center = ({
  className, children,
  background, color, style,
  width
}) =>

  <div
    className={concat('center', className)}
    style={{
      ...styles.center,
      ...(background ? { background: background } : null),
      ...(color ? { color: color } : null),
      ...(width ? { width: width } : null),
      ...style
    }}>

    {children}

  </div>

Center.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  background: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object,
  width: PropTypes.string
}

export default Center
