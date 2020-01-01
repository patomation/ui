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
  lines: PropTypes.number
}

export default Placeholder
