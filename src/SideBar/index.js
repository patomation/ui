import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'
import config from '../config.js'

const SideBar = ({
  className, children, menu,
  style, menuStyle, contentStyle,
  width,
  right // Menu position. Defaults to left
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
        ...(width ? { width: width } : null),
        ...(right ? { right: 0 } : null),
        ...menuStyle
      }}>

        {menu}

      </menu>

      <main style={{
        ...styles.content,
        ...(right ? {
          marginRight: width || config.size.sideBar
        } : {
          marginLeft: width || config.size.sideBar
        }),
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
  width: PropTypes.string,
  right: PropTypes.bool
}

export default SideBar
