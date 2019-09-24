import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'
import keys from './keys.js'
import hotkey from '@patomation/hotkey'

import Grid from '../Grid'
import Button from '../Button'

const Keyboard = ({
  className,
  background, color, style,
  enabled, // Object of keys used to show what is enabled. The value doesn't matter.
  hideDisabled, // Totally hide disabled
  gap,
  onDown, onUp,
  buttonStyle,
  hoverStyle,
  activeStyle,
  disabledStyle

}) => {
  const [active, setActive] = useState([])

  return (
    <div
      className={`keyboard ${className || ''}`}
      style={{
        ...styles.container,
        ...(background ? { background: background } : null),
        ...(color ? { color: color } : null),
        ...style
      }}>
      <Grid
        col={30}
        row={5}
        gap={gap !== undefined ? gap : '5px'}
        style={{
          height: '100%'
        }}>

        {keys.map((key, index) => {
          const { name, span } = key

          const handleDown = () => {
            if (onDown) onDown(name.toLowerCase())
          }

          const handleUp = () => {
            if (onUp) onUp(name.toLowerCase())
          }

          // Set hotkey
          hotkey(name.toLowerCase())
            .down(() => {
            // Set button active if hotkey used
              setActive((lastActive) => {
                const nextActive = [...lastActive]
                nextActive[index] = true
                return nextActive
              })
              handleDown()
            })
            .up(() => {
            // Set button to deactive after hotkey used
              setActive((lastActive) => {
                const nextActive = [...lastActive]
                nextActive[index] = false
                return nextActive
              })
              handleUp()
            })

          if (enabled && !Object.prototype.hasOwnProperty.call(enabled, name.toLowerCase()) && hideDisabled) {
            return null
          }

          return <Button
            onDown={handleDown}
            onUp={handleUp}
            active={active[index]}
            key={`key_${index}`}
            hoverStyle={hoverStyle}
            activeStyle={activeStyle}
            disabledStyle={disabledStyle}
            disabled={enabled ? !Object.prototype.hasOwnProperty.call(enabled, name.toLowerCase()) : null}
            style={{
              ...{
                // Makes button into grid item
                gridColumn: `auto / span ${span}`,
                gridRow: 'auto / span 1',
                // For better centering
                paddingLeft: 0,
                paddingRight: 0
              },
              ...buttonStyle
            }}>

            {name}

          </Button>
        })}
      </Grid>
    </div>
  )
}

Keyboard.propTypes = {
  className: PropTypes.string,
  background: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object,
  enabled: PropTypes.bool,
  hideDisabled: PropTypes.bool,
  gap: PropTypes.string,
  onDown: PropTypes.func,
  onUp: PropTypes.func,
  buttonStyle: PropTypes.func,
  hoverStyle: PropTypes.string,
  activeStyle: PropTypes.string,
  disabledStyle: PropTypes.string
}

export default Keyboard
