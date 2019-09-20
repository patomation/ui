import React from 'react';
import styles from './styles.js'
import '../../node_modules/material-icons/iconfont/material-icons.css'

export default (props) => {

  const { className, children, name, icon, background, color, style } = props;

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
