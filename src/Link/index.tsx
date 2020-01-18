import * as React from 'react'
import { useState } from 'react'
import * as PropTypes from 'prop-types'
import styles from './styles'
import concat from '../_utility/concat'
/**
* a component for making nice links
*/
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
  /**
  * Exposes ability to set a custom class name
  **/
  className: PropTypes.string,
  /**
  * Individual component or set of components accepted as children
  **/
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  onClick: PropTypes.func,
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
  style: PropTypes.object,
  href: PropTypes.string,
  hoverStyle: PropTypes.object,
  onHover: PropTypes.func
}

export default Link
