import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'
import concat from '../_utility/concat.js'
import config from '../config'
/**
* navigation component with custom child styles
*/
const Nav = ({
  className, children,
  background,
  color = '#ffffff',
  style
}) =>
  <nav
    className={concat('nav', className)}
    style={{
      ...styles.container,
      ...(background ? { background: background } : null),
      ...(color ? { color: color } : null),
      ...style
    }}>

    <style>
      {`
      .nav a {
        color: ${color};
        text-decoration: none;
      }
      `}

    </style>

    <div
      className='nav__container'
      style={{
        maxWidth: config.size.maxWidth,
        margin: '0 auto',
        display: 'flex'
      }}>
        { React.Children.map(children, child => {
          return React.cloneElement(
            child,
            {
              style: {
                marginRight: '1rem'
              }
            })
        })}
    </div>

  </nav>

Nav.propTypes = {
  /**
  * Exposes ability to set a custom class name
  **/
  className: PropTypes.string,
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

export default Nav
