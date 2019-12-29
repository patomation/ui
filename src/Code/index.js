import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'
import concat from '../_utility/concat.js'
import { Panel } from '../'

/**
* A component for displaying code samples
*/
const Code = ({
  className, block,
  children,
  background = 'gray', color = '#ffffff', style
}) => {
  return (
    <Panel
      className={concat('code', className)}
      style={{
        ...styles.container,
        ...(background ? { background: background } : null),
        ...(color ? { color: color } : null),
        ...style
      }}>
      <code>

        {children || block}

      </code>
    </Panel>
  )
}

Code.propTypes = {
  /**
  * Exposes ability to set a custom class name
  **/
  className: PropTypes.string,
  children: PropTypes.string,
  block: PropTypes.string,
  background: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object
}

export default Code
