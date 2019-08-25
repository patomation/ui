import React from 'react';
import styles from './styles.js'

import Icon from '../Icon';

export default (props) => {

  const {
    onClick, className,
    background, color, style,
    name, icon, iconStyle,
    active, activeStyle
  } = props;

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
      }}>

      <Icon
        style={{
          ...iconStyle,
          ...styles.icon
        }}
        name={icon || name}/>

    </div>
  )
}
