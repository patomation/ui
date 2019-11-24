import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'
import concat from '../_utility/concat.js'
import Icon from '../Icon'
/**
* an icon that spins 
*/
const Spinner = ({
  icon, className, background, color, style
}) => {
  return (
    <div className={concat('spinner', className)}>
      <style>{styles.keyframes.spinCounterClockwise}</style>

      <Icon
        className='spinner__icon'
        name={icon || 'sync'}
        style={{
          ...styles.container,
          ...(background ? { background: background } : null),
          ...(color ? { color: color } : null),
          ...style
        }} />
    </div>
  )
}

Spinner.propTypes = {
  /**
  * Exposes ability to set a custom class name
  **/
  className: PropTypes.string,
  icon: PropTypes.func,
  background: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object
}

export default Spinner
