import * as React from 'react'
import * as PropTypes from 'prop-types'
import { FunctionComponent, ReactNode } from 'react'
import styles from './styles'
import concat from '../_utility/concat'

interface Props {
  children?: [ReactNode] | ReactNode
  className?: string
  menu?: [ReactNode] | ReactNode
  style?: object
  menuStyle?: object
  contentStyle?: object
  width?: string
  right?: boolean
}
/**
* a layout that makes a side menu and a content area
*/
const SideBar: FunctionComponent<Props> = ({
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
