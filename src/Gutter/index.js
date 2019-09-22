import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'

const Gutter = ({
  className, style, disabled, vertical
}) =>

  disabled !== true
    ? <div
      className={className}
      style={{
        ...styles.horizontal,
        ...(vertical === true ? styles.vertical : null),
        ...style
      }}>
    </div>
    : null

Gutter.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  disabled: PropTypes.string,
  vertical: PropTypes.bool
}

export default Gutter
