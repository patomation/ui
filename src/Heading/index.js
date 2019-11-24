import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'
import concat from '../_utility/concat.js'
/**
* Heading component h1 h2 h3 h4 ect
*/
const Heading = ({
  Tag, className, onClick, children,
  background, color, style
}) => {
  return (
    <Tag
      className={concat('heading', className)}
      onClick={onClick}
      style={{
        ...styles.container,
        ...(background ? { background: background } : null),
        ...(color ? { color: color } : null),
        ...style
      }}>

      {children}

    </Tag>
  )
}

Heading.propTypes = {
  /**
  * Exposes ability to set a custom class name
  **/
  Tag: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  background: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object
}

export default Heading
