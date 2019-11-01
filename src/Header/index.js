import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'
import concat from '../_utility/concat.js'

const Header = ({
  className, onClick, children,
  background, color, style
}) => {
  return (
    <header
      className={concat('header', className)}
      onClick={onClick}
      style={{
        ...styles.container,
        ...(background ? { background: background } : null),
        ...(color ? { color: color } : null),
        ...style
      }}>

      {children}

    </header>
  )
}

Header.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  background: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object
}

export default Header
