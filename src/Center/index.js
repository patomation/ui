import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'

const Center = ({
  className, children,
  style, containerStyle, contentStyle
}) =>

  <div className={className}
    style={{
      ...styles.container,
      ...style,
      ...containerStyle
    }}>

    <div style={{
      ...styles.content,
      ...contentStyle
    }}>

      {children}

    </div>

  </div>

Center.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  style: PropTypes.object,
  containerStyle: PropTypes.func,
  contentStyle: PropTypes.func
}

export default Center
