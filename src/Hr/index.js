import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'

const Hr = ({
  className, background, color, style
}) => {
  return (
    <hr
      className={className}
      style={{
        ...styles.container,
        ...(background ? { background: background } : null),
        ...(color ? { color: color } : null),
        ...style
      }} />
  )
}

Hr.propTypes = {
  className: PropTypes.string,
  background: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object
}

export default Hr
