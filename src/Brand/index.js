import React from 'react'
import styles from './styles.js'

const Brand = ({
  className, children,
  onClick,
  background, color, style
}) =>

<span
  onClick={onClick}
  className={className}
  style={{
    ...styles.container,
    ...( background ? { background: background } : null ),
    ...( color ? { color: color } : null ),
    ...style
  }}>

  {children}

</span>

export default Brand
