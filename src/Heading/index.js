import React from 'react';
import styles from './styles.js'

export default (props) => {

  const { Tag, className, onClick, children, background, color, style } = props;

  return(
    <Tag
      className={className}
      onClick={onClick}
      style={{
        ...styles.container,
        ...( background ? { background: background } : null ),
        ...( color ? { color: color } : null ),
        ...style
      }}>

      {children}

    </Tag>
  )
}
