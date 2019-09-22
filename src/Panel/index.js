import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'
import Hr from '../Hr'

const Panel = ({
  className, children, header,
  style, containerStyle, contentStyle,
  padding // Padding for inner content
}) => {
  return (
    <div
      className={className}
      style={{
        ...styles.container,
        ...style,
        ...containerStyle
      }}>

      {(header
        ? <div style={styles.header}>

          {header}

        </div> : null)}
      {(header ? <Hr /> : null)}

      <div style={{
        ...styles.content,
        ...contentStyle,
        ...(padding ? { padding: padding } : null)
      }}>
        {children}
      </div>

    </div>
  )
}

Panel.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  header: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  style: PropTypes.object,
  containerStyle: PropTypes.object,
  contentStyle: PropTypes.object,
  padding: PropTypes.string
}

export default Panel
