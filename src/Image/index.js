import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'
import concat from '../_utility/concat.js'

const Image = ({
  className, src, alt,
  style, containerStyle, imageStyle,
  bg, square, rectangle, background // Image modes
}) =>

  <div
    className={concat('image', className)}
    style={{
      ...styles.default.container,
      ...(square === true ? styles.square.container : null),
      ...(rectangle === true ? styles.rectangle.container : null),
      ...(background === true ? {
        background: `url(${src}) no-repeat center center fixed`,
        ...styles.background.container
      } : null),
      ...style,
      ...containerStyle
    }}>
    { !background
    ? <img
        src={src}
        alt={alt || 'image'}
        style={{
          ...styles.default.image,
          ...(square === true ? styles.square.image : null),
          ...(rectangle === true ? styles.rectangle.image : null),
          ...imageStyle
      }} />
    : null }
  </div>

Image.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  style: PropTypes.object,
  containerStyle: PropTypes.object,
  imageStyle: PropTypes.object,
  bg: PropTypes.bool,
  square: PropTypes.bool,
  rectangle: PropTypes.bool,
  background: PropTypes.bool
}

export default Image
