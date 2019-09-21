import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'
import Icon from '../Icon'

const Spinner = ({
  icon, className, background, color, style
}) => {
  return (
    <div>
      <style>{styles.keyframes.spinCounterClockwise}</style>

      <Icon
        name={icon || 'sync'}
        className={className}
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
  icon: PropTypes.func,
  className: PropTypes.string,
  background: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object
}

export default Spinner
