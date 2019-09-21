import React from 'react'
import styles from './styles.js'

const Footer = ({
  className, children, onClick,
  background, color, style
}) => {

  return(
    <footer
      onClick={onClick}
      className={className}
      style={{
        ...styles.container,
        ...( background ? { background: background } : null ),
        ...( color ? { color: color } : null ),
        ...style
      }}>

      {children}

    </footer>
  )
}

export default Footer
