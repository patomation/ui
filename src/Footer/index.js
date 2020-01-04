import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'
import concat from '../_utility/concat.js'
import config from '../config'

/**
*  A sticky footer component obviously
*/
const Footer = ({
  className, children,
  background, color, style
}) => {
  return (
    <footer
      className={concat('footer', className)}
      style={{
        ...styles.container,
        ...(background ? { background: background } : null),
        ...(color ? { color: color } : null),
        ...style
      }}>
      <div
        className='footer__container'
        style={{
          maxWidth: config.size.maxWidth,
          margin: '0 auto'
        }}>
        {children}
      </div>

    </footer>
  )
}

Footer.propTypes = {
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

export default Footer
