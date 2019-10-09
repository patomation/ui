import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'
import concat from '../../utility/concat.js'
/**
* stardardized button component
**/
const Button = ({
  className, type, disabled, enabled, active,
  onClick, onMouseDown, onMouseUp, onTouchStart, onTouchEnd,
  onMouseEnter, onMouseLeave,
  onDown, onUp,
  children, title, // Child or title works for the button label
  background, color, style,
  hoverStyle, disabledStyle, activeStyle, enabledStyle,
  onHover, kind,
  center // If prop is used at all then a div will be added to the outside with textAlign center
}) => {
  const [hover, setHover] = useState(false)
  const [touched, setTouched] = useState(false)
  const [isActive, setActive] = useState(active || false)

  // Allow it to be set to active from the ouseside
  useEffect(() => {
    setActive(active)
  }, [active])

  const handleDown = () => {
    // Make ui active
    setActive(true)
    // Handle callback
    if (onDown) onDown()
  }

  const handleUp = () => {
    // Make ui de-active
    setActive(false)
    // Handle callback
    if (onUp) onUp()
  }

  const button = <button
    type={type}
    disabled={disabled}
    className={concat('button', className)}
    onTouchStart={() => {
      handleDown()
      setTouched(true)
      // Expose event to the oustide
      if (onTouchStart) onTouchStart()
    }}
    onTouchEnd={() => {
      handleUp()
      // Expose event to the oustide
      if (onTouchEnd) onTouchEnd()
    }}
    onMouseDown={() => {
      // Ignore this event if touched
      if (!touched) {
        handleDown()
        // Expose event to the oustide
        if (onMouseDown) onMouseDown()
      }
    }}
    onMouseUp={() => {
      // Ignore this event if touched
      if (!touched) {
        handleUp()
        // Expose event to the oustide
        if (onMouseUp) onMouseUp()

        // Since onMouseUp gets called with touch events set touched false here...
      } else {
        setTouched(false)
      }
    }}
    onClick={onClick}
    onMouseEnter={() => {
      setHover(true)
      if (onMouseEnter) onMouseEnter() // I find it more usefull to bubble up these events
      if (onHover) onHover(true) // This was here for testing. This may get depreciated.
    }}
    onMouseLeave={() => {
      setHover(false)
      if (onMouseLeave) onMouseLeave() // I find it more usefull to bubble up these events. Why is this here?
      if (onHover) onHover(false) // This was here for testing. This may get depreciated.
      setActive(false) // Make it not active anymore
    }}
    style={{
      ...styles.default,
      ...(styles.kind[kind || 'normal']),
      ...(kind === 'outline' && color ? {
        border: `1px solid ${color}`
      } : null),
      ...(background ? { background: background } : null),
      ...(color ? { color: color } : null),
      ...style,
      ...(hover ? (styles.kind[kind || 'normal'].hover) : null),
      ...(hover ? hoverStyle : null),
      ...(enabled ? (styles.kind[kind || 'normal'].enabled) : null),
      ...(enabled ? enabledStyle : null),
      ...(disabled ? (styles.kind[kind || 'normal'].disabled) : null),
      ...(disabled ? disabledStyle : null),
      ...(isActive ? (styles.kind[kind || 'normal'].active) : null),
      ...(isActive ? activeStyle : null)
    }}>

    { children || title }

  </button>

  // If center is defined wrap button with div with textAlign center
  return center ? <div style={{ textAlign: 'center' }}> { button } </div> : button
}

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  enabled: PropTypes.bool,
  active: PropTypes.bool,
  onClick: PropTypes.func,
  onMouseDown: PropTypes.func,
  onMouseUp: PropTypes.func,
  onTouchStart: PropTypes.func,
  onTouchEnd: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onDown: PropTypes.func,
  onUp: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  title: PropTypes.string,
  background: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object,
  hoverStyle: PropTypes.object,
  disabledStyle: PropTypes.object,
  activeStyle: PropTypes.object,
  enabledStyle: PropTypes.object,
  onHover: PropTypes.func,
  kind: PropTypes.string,
  center: PropTypes.bool
}

export default Button
