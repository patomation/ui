import React from 'react'
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

export default Image
