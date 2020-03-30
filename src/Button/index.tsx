import * as React from 'react'
import { useState, useEffect, FunctionComponent, ReactNode } from 'react'
import styles from './styles'

interface Props {
  children?: [ReactNode] | ReactNode
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  enabled?: boolean
  active?: boolean
  onClick?: () => void
  onMouseDown?: () => void
  onMouseUp?: () => void
  onTouchStart?: () => void
  onTouchEnd?: () => void
  onMouseEnter?: () => void
  onMouseLeave?: () => void
  onDown?: () => void
  onUp?: () => void
  onHover?: (boolean) => void
  title?: string
  background?: string
  color?: string
  style?: object
  hoverStyle?: object
  disabledStyle?: object
  activeStyle?: object
  enabledStyle?: object
  kind?: string
}

/**
* Standardized button component
**/
const Button: FunctionComponent<Props> = ({
  className, type, disabled, enabled, active = false,
  onClick, onMouseDown, onMouseUp, onTouchStart, onTouchEnd,
  onMouseEnter, onMouseLeave,
  onDown, onUp,
  children, title, // Child or title works for the button label
  background, color, style,
  hoverStyle, disabledStyle, activeStyle, enabledStyle,
  onHover
}) => {
  const [hover, setHover] = useState(false)
  const [touched, setTouched] = useState(false)
  const [isActive, setActive] = useState(active)

  // Allow it to be set to active from the outside
  useEffect(() => {
    setActive(active)
  }, [active])

  const handleDown = (): void => {
    // Make ui active
    setActive(true)
    // Handle callback
    if (onDown) onDown()
  }

  const handleUp = (): void => {
    // Make ui de-active
    setActive(false)
    // Handle callback
    if (onUp) onUp()
  }

  return <button
    type={type}
    disabled={disabled}
    className={className}
    onTouchStart={(): void => {
      handleDown()
      setTouched(true)
      // Expose event to the oustide
      if (onTouchStart) onTouchStart()
    }}
    onTouchEnd={(): void => {
      handleUp()
      // Expose event to the oustide
      if (onTouchEnd) onTouchEnd()
    }}
    onMouseDown={(): void => {
      // Ignore this event if touched
      if (!touched) {
        handleDown()
        // Expose event to the oustide
        if (onMouseDown) onMouseDown()
      }
    }}
    onMouseUp={(): void => {
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
    onMouseEnter={(): void => {
      if (!disabled) {
        setHover(true)
        if (onMouseEnter) onMouseEnter() // I find it more usefull to bubble up these events
        if (onHover) onHover(true) // This was here for testing. This may get depreciated.
      }
    }}
    onMouseLeave={(): void => {
      setHover(false)
      if (onMouseLeave) onMouseLeave() // I find it more usefull to bubble up these events. Why is this here?
      if (onHover) onHover(false) // This was here for testing. This may get depreciated.
      setActive(false) // Make it not active anymore
    }}
    style={{
      ...styles.default,
      background,
      color,
      ...(hover ? (styles.hover) : null),
      ...(enabled ? (styles.enabled) : null),
      ...(disabled ? (styles.disabled) : null),
      ...style,
      ...(hover ? hoverStyle : null),
      ...(enabled ? enabledStyle : null),
      ...(disabled ? disabledStyle : null),
      ...(isActive ? (styles.active) : null),
      ...(isActive ? activeStyle : null)
    }}>

    <style>
      {`
      button::-moz-focus-inner {
        border: 0;
      }
    `}
    </style>

    { children || title }

  </button>
}

export default Button
