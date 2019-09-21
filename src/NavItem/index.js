import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'

import Link from '../Link'

const NavItem = ({
  className, children,
  onClick, href, title, active,
  background, color, style
}) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={className}
      style={{
        ...styles.container,
        ...(background ? { background: background } : null),
        ...(color ? { color: color } : null),
        ...(active ? { opacity: 1 } : null),
        ...style
      }}>

      { children || title }

      <div style={{
        ...styles.bottomBar,
        ...{
          background: (active ? '#ffffff' : null)
        }
      }
      }></div>

    </Link>
  )
}

NavItem.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  onClick: PropTypes.func,
  href: PropTypes.string,
  title: PropTypes.string,
  active: PropTypes.bool,
  background: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object
}

export default NavItem
