import React from 'react'
import styles from './styles.js'

const Center = ({
  className, children,
  style, containerStyle, contentStyle
}) =>

  <div className={className}
    style={{
      ...styles.container,
      ...style,
      ...containerStyle
    }}>

    <div style={{
      ...styles.content,
      ...contentStyle
    }}>

      {children}

    </div>

  </div>

export default Center
