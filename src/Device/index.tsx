import * as React from 'react'
import { FunctionComponent, ReactNode } from 'react'
import styles from './styles'

import Shape from '../Shape'

interface Props {
  children?: [ReactNode] | ReactNode
  className?: string
  background?: string
  color?: string
  width?: string
  maxWidth?: string
  style?: object
}

const Device: FunctionComponent<Props> = ({
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
      position: 'relative' as 'relative',
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
      boxSizing: 'border-box' as 'border-box',
      position: 'absolute' as 'absolute',
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

export default Device
