import React from 'react'
import styles from './styles.js'

const Header = ({
  className, onClick, children,
  background, color, style
}) => {
  return (
    <header
      className={className}
      onClick={onClick}
      style={{
        ...styles.container,
        ...(background ? { background: background } : null),
        ...(color ? { color: color } : null),
        ...style
      }}>

      {children}

    </header>
  )
}

export default Header
