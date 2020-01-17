import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'
import concat from '../_utility/concat.js'
import config from '../config'
/**
* Header component with custom flavor
*/
const Header = ({
  className, onClick, children,
  background = '#333',
  color = '#ffffff',
  style
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

      <div
        className='header__container'
        style={{
          maxWidth: config.size.maxWidth,
          margin: '0 auto'
        }}>

        {children}

      </div>

    </header>
  )
}

if (process.env.NODE_ENV !== 'production') {
  Header.propTypes = {
    /**
    * Exposes ability to set a custom class name
    **/
    className: PropTypes.string,
    onClick: PropTypes.func,
    /**
    * Individual component or set of components accepted as children
    **/
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    /**
    * The background color of component
    **/
    background: PropTypes.string,
    /**
    * The text color of component
    **/
    color: PropTypes.string,
    /**
    * Set any styles of the top level element of the component
    **/
    style: PropTypes.object
  }
}

export default Header
