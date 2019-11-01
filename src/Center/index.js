import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'
import concat from '../_utility/concat.js'

const Center = ({
  className, children,
  background, color, style,
  width, maxWidth
}) =>
  <div
    className='center'
    style={{
      ...styles.container,
      ...(background ? { background: background } : null),
      ...(color ? { color: color } : null),
      ...style
    }}>

    <div
      className={concat('center__content', className)}
      style={{
        ...styles.content,
        ...(width ? { width: width } : null),
        ...(maxWidth ? { maxWidth: maxWidth } : null)
      }}>

      {children}

    </div>

  </div>

Center.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  background: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object,
  width: PropTypes.string,
  maxWidth: PropTypes.string
}

export default Center
