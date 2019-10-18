import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'
import concat from '../../utility/concat.js'

const Hr = ({
  className, color, opacity, style
}) => {
  return (
    <hr
      className={concat('hr', className)}
      style={{
        ...styles.container,
        border: `1px solid ${color}`,
        opacity,
        ...style
      }} />
  )
}

Hr.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object,
  opacity: PropTypes.number
}
Hr.defaultProps = {
  color: '#000000',
  opacity: 0.3
}

export default Hr
