import React from 'react'
import styles from './styles.js'

export default (props) => {

  const { className, children, onClick, background, color, style } = props

  return(
    <div
      onClick={onClick}
      className={className}
      style={{
        ...styles.container,
        ...( background ? { background: background } : null ),
        ...( color ? { color: color } : null ),
        ...style
      }}>

      {children}

    </div>
  )
}