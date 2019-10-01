import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'
import concat from '../../utility/concat.js'

const Row = ({
  className, children,
  onClick,
  background, color, style
}) =>

  <div
    className={concat('row', className)}
    style={{
      ...styles.container,
      ...(background ? { background: background } : null),
      ...(color ? { color: color } : null),
      ...style
    }}>

    {children}

  </div>

Row.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  onClick: PropTypes.func,
  background: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object
}

export default Row
