import React from 'react'
import styles from './styles.js'

export default (props) => {

  const { className, onClick, children, background, color, style } = props

  return(
    <header
      className={className}
      onClick={onClick}
      style={{
        ...styles.container,
        ...( background ? { background: background } : null ),
        ...( color ? { color: color } : null ),
        ...style
      }}>

      {children}

    </header>
  )
}
