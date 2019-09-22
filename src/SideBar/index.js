import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'

const SideBar = ({
  className, children, menu,
  style, menuStyle, contentStyle,
  menuWidth
}) => {
  return (
    <div
      className={className}
      style={{
        ...styles.container,
        ...style
      }}>

      <menu style={{
        ...styles.menu,
        ...(menuWidth ? { width: menuWidth } : null),
        ...menuStyle
      }}>

        {menu}

      </menu>

      <main style={{
        ...styles.content,
        ...(menuWidth ? { marginLeft: menuWidth } : null),
        ...contentStyle
      }}>

        {children}

      </main>

    </div>
  )
}

SideBar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  menu: PropTypes.string,
  style: PropTypes.object,
  menuStyle: PropTypes.object,
  contentStyle: PropTypes.object,
  menuWidth: PropTypes.string
}

export default SideBar
