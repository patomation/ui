import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'

import { Shape } from '../'

const Device = ({
  children,
  width, maxWidth,
  background, color, style
}) =>

  <div
    className={'device'}
    style={{
      ...styles.container,
      ...(background ? { background: background } : null),
      ...(color ? { color: color } : null),
      position: 'relative',
      width,
      ...(maxWidth ? {
        maxWidth,
        margin: '0 auto'
      } : null),
      ...style
    }}>
    <div className='device__frame' style={{
      overFlow: 'hidden',
      borderRadius: '1rem',
      border: '1px solid silver',
      boxSizing: 'border-box',
      position: 'absolute',
      top: 0,
      left: 0,
      height: '100%',
      width: '100%',
      zIndex: '5',
      pointerEvents: 'none'
    }}>

    </div>
    <Shape
      className={'device__screen'}
      portrait
      background='silver'
      style={{
        padding: '1rem'
      }}>

      {children}

    </Shape>
    <Shape className='device__button' circle background='silver' width='10%' style={{ paddingBottom: '1rem' }} />
  </div>

Device.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  background: PropTypes.string,
  color: PropTypes.string,
  width: PropTypes.string,
  maxWidth: PropTypes.string,
  style: PropTypes.object
}

export default Device
