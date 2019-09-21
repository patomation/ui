import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'

const Image = ({
  className, src, type, alt,
  style, containerStyle, imageStyle,
  bg, square // Image modes
}) =>

  <div
    className={className}
    style={{
      ...styles.default.container,
      ...(type === 'background' ? styles.background.container : null),
      ...(square === true ? styles.square.container : null),
      ...style,
      ...containerStyle
    }}>

    <img
      src={src}
      alt={alt || 'image'}
      style={{
        ...styles.default.image,
        ...(type === 'background' ? styles.background.image : null),
        ...(square === true ? styles.square.image : null),
        ...imageStyle
      }} />

  </div>

Image.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  type: PropTypes.string,
  alt: PropTypes.string,
  style: PropTypes.object,
  containerStyle: PropTypes.func,
  imageStyle: PropTypes.string,
  bg: PropTypes.boolean,
  square: PropTypes.boolean
}

export default Image
