import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'
import concat from '../_utility/concat.js'
/**
* display flex row
*/
const Row = ({
  className, children, style
}) =>

  <div
    className={concat('row', className)}
    style={{
      ...styles.container,
      ...style
    }}>

    {children}

  </div>

Row.propTypes = {
  /**
  * Exposes ability to set a custom class name
  **/
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  style: PropTypes.object
}

export default Row
