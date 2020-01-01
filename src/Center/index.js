import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'
import concat from '../_utility/concat.js'
/**
* Aligns any content to the center both vertically and horizontally
*/
const Center = ({
  className, children,
  background, color, style, contentStyle,
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
        ...(maxWidth ? { maxWidth: maxWidth } : null),
        ...contentStyle
      }}>

      {children}

    </div>

  </div>

Center.propTypes = {
  /**
  * Exposes ability to set a custom class name
  **/
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
  /**
  * Set any styles of the top level element of the component
  **/
  style: PropTypes.object,
  contentStyle: PropTypes.object,
  width: PropTypes.string,
  maxWidth: PropTypes.string,
  disabled: PropTypes.bool
}

Center.defaultProps = {
  disabled: false
}

export default Center
