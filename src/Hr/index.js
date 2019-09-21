import React from 'react'
import styles from './styles.js'

export default (props) => {

  const { className, background, color, style } = props

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
