import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'
import concat from '../_utility/concat.js'
/**
* navigation component with custom child styles
*/
const Nav = ({
  className, children,
  background, color, style
}) =>
// .nav > span {
//   margin-right: 1rem !important;
// }
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
        color: #ffffff;
        text-decoration: none;
      }
      `}

    </style>

    {React.Children.map(children, child => {
      return React.cloneElement(
        child,
        {
          style: {
            marginRight: '1rem'
          }
        })
    })}

  </nav>

Nav.propTypes = {
  /**
  * Exposes ability to set a custom class name
  **/
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  background: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object
}

export default Nav
