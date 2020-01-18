import * as React from 'react'
import * as PropTypes from 'prop-types'
import styles from './styles'
import concat from '../_utility/concat'
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

if (process.env.NODE_ENV !== 'production') {
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
}

export default Footer
