import React from 'react'
import styles from './styles.js'

import Icon from '../Icon'

export default (props) => {

  const {
    onClick, className,
    background, color,
    style, iconStyle, titleStyle, activeStyle,
    name, icon, active, title
  } = props

  return(
    <div
      className={className}
      onClick={onClick}
      style={{
        ...styles.container,
        ...( background ? { background: background } : null ),
        ...( color ? { color: color } : null),
        ...style,
        ...( active ? styles.active : null),
        ...( active ? activeStyle : null),
        ...(title ? {display: 'flex'} : null)
      }}>

      <Icon
        style={{
          ...styles.icon,
          ...iconStyle
        }}
        name={icon || name}/>

      {title? <div
        style={{
          ...styles.title,
          ...titleStyle
        }}>
        {title}
      </div> :null}
    </div>
  )
}
