import React from 'react';
import styles from './styles.js'

import Icon from '../Icon';

export default (props) => {

  const { onClick, className, background, color, style, icon, iconStyle } = props;

  return(
    <div
      className={className}
      onClick={onClick}
      style={{
        ...styles.container,
        ...( background ? { background: background } : null ),
        ...( color ? { color: color } : null),
        ...style
      }}>

      <Icon
        style={{
          ...iconStyle,
          ...styles.icon
        }}
        name={icon}/>

    </div>
  )
}
