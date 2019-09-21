import React from 'react'
import styles from './styles.js'

const Gutter = ({
  className, style, disabled, vertical
}) =>

disabled !== true ?
<div
  className={className}
  style={{
    ...styles.horizontal,
    ...( vertical === true ? styles.vertical : null ),
    ...style
  }}>
</div>
: null

export default Gutter
