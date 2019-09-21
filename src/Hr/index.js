import React from 'react'
import styles from './styles.js'

const Hr = ({
  className, background, color, style
}) => {

  return(
    <hr
      className={className}
      style={{
        ...styles.container,
        ...( background ? { background: background } : null ),
        ...( color ? { color: color } : null ),
        ...style
      }} />
  )
}

export default Hr
