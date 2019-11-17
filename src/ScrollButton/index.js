import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'
import { IconButton } from '../'

const ScrollButton = ({
  onClick,
  background, color = '#ffffff', style
}) => {
  const ref = useRef(null)

  return (
    <div
      onClick={onClick}
      className={'scroll-button'}
      style={{
        ...styles.container,
        ...(background ? { background: background } : null),
        ...(color ? { color: color } : null),
        position: 'relative',
        width: '100%',
        textAlign: 'center',
        ...style
      }}>

      <IconButton
        className='scroll-button__icon'
        width='3rem'
        name='keyboard_arrow_down'
        color={color}
        style={{
          paddingBottom: '1rem'
        }}
        onClick={() => {
          ref.current.scrollIntoView({
            behavior: 'smooth'
          })
        }} />

      <div
        className='scroll-button__scroll-ref'
        ref={ref}
        style={{
          position: 'absolute',
          bottom: '0'
        }}></div>

    </div>
  )
}

ScrollButton.propTypes = {
  onClick: PropTypes.func,
  background: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object
}

export default ScrollButton
