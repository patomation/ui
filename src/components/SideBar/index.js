import React from 'react';
import styles from './styles.js'

export default (props) => {

  const { className, children, menu, style, menuStyle, contentStyle } = props;

  return(
    <div
      className={className}
      style={{
        ...styles.container,
        ...style
      }}>

      <div style={{
        ...styles.menu,
        ...menuStyle
      }}>

        {menu}

      </div>

      <div style={{
        ...styles.content,
        ...contentStyle
      }}>

        {children}

      </div>

    </div>
  )
}
