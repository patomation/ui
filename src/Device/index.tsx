import * as React from 'react'
import * as PropTypes from 'prop-types'
import styles from './styles'

import Shape from '../Shape'

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
      overflow: 'hidden',
      borderRadius: '1rem',
      border: '1px solid silver',
      boxSizing: 'border-box',
      position: 'absolute',
      top: 0,
      left: 0,
      height: '100%',
      width: '100%',
      zIndex: 5,
      pointerEvents: 'none'
    }}>

    </div>
    <Shape
      className={'device__screen'}
      portrait
      background='silver'
      style={{
        padding: '1rem'
      }}
      innerStyle={{
        overFlow: 'hidden' // Not working??
      }}>
      <div
        className='device__scroll'
      >
        {children}
      </div>
    </Shape>
    <Shape className='device__button' circle background='silver' width='10%' style={{ paddingBottom: '1rem' }} />
  </div>

if (process.env.NODE_ENV !== 'production') {
  Device.propTypes = {
    className: PropTypes.string,
    /**
    * Individual component or set of components accepted as children
    **/
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    /**
    * The background color of component
    **/
    background: PropTypes.string,
    /**
    * The text color of component
    **/
    color: PropTypes.string,
    width: PropTypes.string,
    maxWidth: PropTypes.string,
    /**
    * Set any styles of the top level element of the component
    **/
    style: PropTypes.object
  }
}
export default Device
