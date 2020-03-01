import * as React from 'react'
import { useState, useEffect, FunctionComponent, ReactNode } from 'react'
import * as PropTypes from 'prop-types'
import styles from './styles'
import concat from '../_utility/concat'
import posed from 'react-pose'

interface Props {
  children?: [ReactNode] | ReactNode
  className?: string
  type?: string
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
  center?: boolean
  right?: boolean
}

const PosedButton = posed.button({
  hover: {
    transform: 'translateY(-2px)',
    transition: { type: 'spring', stiffness: 100 }
  },
  nohover: {
    transform: 'translateY(0px)',
    transition: { type: 'spring', stiffness: 100 }
  }
})

/**
* Standardized button component
**/
const Button: FunctionComponent<Props> = ({
  className, type, disabled, enabled, active = false,
  onClick, onMouseDown, onMouseUp, onTouchStart, onTouchEnd,
  onMouseEnter, onMouseLeave,
  onDown, onUp,
  children, title, // Child or title works for the button label
  background = '#333', color, style,
  hoverStyle, disabledStyle, activeStyle, enabledStyle,
  onHover, kind,
  center, right // If prop is used at all then a div will be added to the outside with textAlign center
}) => {
  const [hover, setHover] = useState(false)
  const [touched, setTouched] = useState(false)
  const [isActive, setActive] = useState(active)

  // Allow it to be set to active from the outside
  useEffect((): void => {
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

  const button = <PosedButton pose={ hover ? 'hover' : 'nohover' }
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
      if (!disabled) {
        setHover(true)
        if (onMouseEnter) onMouseEnter() // I find it more usefull to bubble up these events
        if (onHover) onHover(true) // This was here for testing. This may get depreciated.
      }
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
      ...(background && kind !== 'outline' && kind !== 'none' ? { background: background } : null),
      ...(color ? { color: color } : null),
      ...(hover ? (styles.kind[kind || 'normal'].hover) : null),
      ...(enabled ? (styles.kind[kind || 'normal'].enabled) : null),
      ...(disabled ? (styles.kind[kind || 'normal'].disabled) : null),
      ...style,
      ...(hover ? hoverStyle : null),
      ...(enabled ? enabledStyle : null),
      ...(disabled ? disabledStyle : null),
      ...(isActive ? (styles.kind[kind || 'normal'].active) : null),
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

  </PosedButton>

  // If center is defined wrap button with div with textAlign center
  return center || right
    ? <div
      style={{
        textAlign: center ? 'center' : 'right'
      }}> { button } </div>
    : button
}

if (process.env.NODE_ENV !== 'production') {
  Button.propTypes = {
    /**
    * Exposes ability to set a custom class name
    **/
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
    /**
    * text or html can be set between tags as a child
    **/
    /**
    * Individual component or set of components accepted as children
    **/
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    /**
    * text set as a prop
    **/
    title: PropTypes.string,
    /**
    * The background color of component
    **/
    background: PropTypes.string,
    /**
    * The text color of component
    **/
    color: PropTypes.string,
    /**
    * Set any styles of the top level element of the component
    **/
    style: PropTypes.object,
    hoverStyle: PropTypes.object,
    disabledStyle: PropTypes.object,
    activeStyle: PropTypes.object,
    enabledStyle: PropTypes.object,
    onHover: PropTypes.func,
    kind: PropTypes.string,
    center: PropTypes.bool,
    right: PropTypes.bool
  }
}
export default Button
