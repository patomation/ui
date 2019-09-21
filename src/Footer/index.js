import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'

const Footer = ({
  className, children, onClick,
  background, color, style
}) => {
  return (
    <footer
      onClick={onClick}
      className={className}
      style={{
        ...styles.container,
        ...(background ? { background: background } : null),
        ...(color ? { color: color } : null),
        ...style
      }}>

      {children}

    </footer>
  )
}

Footer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  onClick: PropTypes.func,
  background: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object
}

export default Footer
