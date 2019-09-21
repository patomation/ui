import React from 'react'
import styles from './styles.js'

const Content = ({
  className, children,
  background, color, style
}) => {

  return(
    <main
      className={className}
      style={{
        ...styles.container,
        ...( background ? { background: background } : null ),
        ...( color ? { color: color } : null ),
        ...style
      }}>

      {children}

    </main>
  )
}

export default Content
