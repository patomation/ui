import React from 'react'
import styles from './styles.js'
import '../../node_modules/material-icons/iconfont/material-icons.css'

const Icon = ({
  className, children,
  name, icon,
  background, color, style
}) => {

  return(
    <span
      className={`material-icons ${className}`}
      style={{
        ...styles,
        ...( background ? { background: background } : null ),
        ...( color ? { color: color } : null ),
        ...style}}>

      { children || name || icon }

    </span>
  )
}

export default Icon
