import React from 'react';
import styles from './styles.js'

export default (props) => {

  const {
    className, children, menu,
    style, menuStyle, contentStyle,
    menuWidth
  } = props;

  return(
    <div
      className={className}
      style={{
        ...styles.container,
        ...style
      }}>

      <menu style={{
        ...styles.menu,
        ...( menuWidth ? { width: menuWidth } : null ),
        ...menuStyle
      }}>

        {menu}

      </menu>

      <main style={{
        ...styles.content,
        ...( menuWidth ? { marginLeft: menuWidth } : null ),
        ...contentStyle
      }}>

        {children}

      </main>

    </div>
  )
}
