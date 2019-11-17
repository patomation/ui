import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'
import concat from '../_utility/concat.js'

const Center = ({
  className, children,
  background, color, style,
  width, maxWidth,
  disabled
}) =>
  <div
    className={concat('center', className)}
    style={{
      ...(!disabled ? styles.container : null),
      ...(background ? { background: background } : null),
      ...(color ? { color: color } : null),
      ...style
    }}>

    <div
      className='center__content'
      style={{
        ...(!disabled ? styles.content : null),
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
  maxWidth: PropTypes.string,
  disabled: PropTypes.bool
}

Center.defaultProps = {
  disabled: false
}

export default Center
