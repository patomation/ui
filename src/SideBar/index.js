import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'
import concat from '../_utility/concat.js'
/**
* a layout that makes a side menu and a content area
*/
const SideBar = ({
  className, children, menu,
  style, menuStyle, contentStyle,
  width = '200px',
  right // Menu position. Defaults to left
}) => {
  return (
    <div
      className={concat('sidebar', className)}
      style={{
        ...styles.container,
        ...style
      }}>

      <menu
        className='sidebar__menu'
        style={{
          ...styles.menu,
          width,
          ...(right ? { right: 0 } : null),
          ...menuStyle
        }}>

        {menu}

      </menu>

      <main
        className='sidebar__content'
        style={{
          ...styles.content,
          ...(right ? {
            marginRight: width
          } : {
            marginLeft: width
          }),
          ...contentStyle
        }}>

        {children}

      </main>

    </div>
  )
}

if (process.env.NODE_ENV !== 'production') {
  SideBar.propTypes = {
  /**
  * Exposes ability to set a custom class name
  **/
    className: PropTypes.string,
    /**
  * Individual component or set of components accepted as children
  **/
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    menu: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    /**
  * Set any styles of the top level element of the component
  **/
    style: PropTypes.object,
    /**
  *
  **/
    menuStyle: PropTypes.object,
    /**
  *
  **/
    contentStyle: PropTypes.object,
    width: PropTypes.string,
    right: PropTypes.bool
  }
}

export default SideBar
