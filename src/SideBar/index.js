import React from 'react'
import styles from './styles.js'

const SideBar = ({
  className, children, menu,
  style, menuStyle, contentStyle,
  menuWidth
}) => {

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

export default SideBar
