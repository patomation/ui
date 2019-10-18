import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'
import concat from '../../utility/concat.js'

const Nav = ({
  className, children,
  background, color, style
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
        color: #ffffff;
        text-decoration: none;
      }
      .nav > span {
        margin-right: 1rem !important;
      }

    `}
    </style>

    {children}

  </nav>

Nav.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  background: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object
}

export default Nav
