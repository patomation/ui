import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'
import '../../node_modules/material-icons/iconfont/material-icons.css'

const Icon = ({
  className, children,
  name, icon,
  background, color, style
}) => {
  // Filter name
  if (name) {
    if (name === 'play') name = 'play_arrow'
  }

  return (
    <span
      className={`material-icons ${className}`}
      style={{
        ...styles,
        ...(background ? { background: background } : null),
        ...(color ? { color: color } : null),
        ...style
      }}>

      { children || name || icon }

    </span>
  )
}

Icon.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  name: PropTypes.string,
  icon: PropTypes.func,
  background: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object
}

export default Icon
