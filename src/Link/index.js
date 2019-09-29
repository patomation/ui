import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'
import concat from '../../utility/concat.js'

const Link = ({
  className, children,
  onClick, background,
  color, style, href, hoverStyle,
  onHover
}) => {
  const [hover, setHover] = useState(false)

  return (
    <a
      onMouseEnter={() => {
        setHover(true)
        if (onHover) onHover(true)
      }}
      onMouseLeave={() => {
        setHover(false)
        if (onHover) onHover(false)
      }}
      href={href}
      onClick={onClick}
      className={concat('link', className)}
      style={{
        ...styles.container,
        ...(background ? { background: background } : null),
        ...(color ? { color: color } : null),
        ...style,
        ...(hover ? { ...styles.hover, ...hoverStyle } : null)
      }}>

      {children}

    </a>
  )
}

Link.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  onClick: PropTypes.func,
  background: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object,
  href: PropTypes.string,
  hoverStyle: PropTypes.object,
  onHover: PropTypes.func
}

export default Link
