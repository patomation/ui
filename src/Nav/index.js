import React from 'react'
import styles from './styles.js'

const Nav = ({
  className, children,
  background, color, style
}) =>

  <nav
    className={className}
    style={{
      ...styles.container,
      ...(background ? { background: background } : null),
      ...(color ? { color: color } : null),
      ...style
    }}>

    {children}

  </nav>

export default Nav
