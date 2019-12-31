import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'

const Placeholder = ({
  background, color, style, lines = 1
}) =>

  <div
    className={'placeholder'}
    style={{
      ...styles.container,
      ...(background ? { background: background } : null),
      ...(color ? { color: color } : null),
      ...style
    }}>
    { new Array(lines).fill(0).map((_, index) => {
      return <div
        className={'placeholder__line'}
        key = {'line' + index}
        style={{
          background: 'rgba(255,255,255,0.4)',
          height: '0.5rem',
          marginBottom: '0.5rem'
        }}></div>
    })}

  </div>

Placeholder.propTypes = {
  background: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object,
  lines: PropTypes.number
}

export default Placeholder
