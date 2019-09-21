import React from 'react'
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

export default Spinner
