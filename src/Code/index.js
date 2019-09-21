import React from 'react'
import styles from './styles.js'

const Code = ({
  className, children, onClick,
  background, color, style
}) => {
  return (
    <div
      onClick={onClick}
      className={className}
      style={{
        ...styles.container,
        ...(background ? { background: background } : null),
        ...(color ? { color: color } : null),
        ...style
      }}>

      {children}

    </div>
  )
}

export default Code
