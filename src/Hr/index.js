import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'
import concat from '../_utility/concat.js'
/**
* fancy line component
*/
const Hr = ({
  className, color = '#000000', opacity = 0.3, style
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

if (process.env.NODE_ENV !== 'production') {
  Hr.propTypes = {
    /**
    * Exposes ability to set a custom class name
    **/
    className: PropTypes.string,
    /**
    * The text color of component
    **/
    color: PropTypes.string,
    /**
    * Set any styles of the top level element of the component
    **/
    style: PropTypes.object,
    opacity: PropTypes.number
  }
}

export default Hr
