import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'
import concat from '../_utility/concat.js'
import Hr from '../Hr'
/**
* a nice box with border and rounded corners
*/
const Panel = ({
  className, children, header,
  style, containerStyle, contentStyle,
  padding // Padding for inner content
}) => {
  return (
    <div
      className={concat('panel', className)}
      style={{
        ...styles.container,
        ...style,
        ...containerStyle
      }}>

      {(header
        ? <div
          className='panel__header'
          style={styles.header}>

          {header}

        </div> : null)}
      {(header ? <Hr /> : null)}

      <div
        className='panel__content'
        style={{
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
  /**
  * Exposes ability to set a custom class name
  **/
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  header: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  style: PropTypes.object,
  containerStyle: PropTypes.object,
  contentStyle: PropTypes.object,
  padding: PropTypes.string
}

export default Panel
