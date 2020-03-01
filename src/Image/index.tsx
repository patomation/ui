import * as React from 'react'
import * as PropTypes from 'prop-types'
import { FunctionComponent, ReactNode } from 'react'
import styles from './styles'
import concat from '../_utility/concat'

interface Props {
  children?: [ReactNode] | ReactNode
  className?: string
  src?: string
  alt?: string
  style?: object
  containerStyle?: object
  imageStyle?: object
  bg?: boolean
  circle?: boolean
  square?: boolean
  rectangle?: boolean
  background?: boolean
  maxWidth?: string
  width?: string
}
/**
* img component that handles different display modes
*/
const Image: FunctionComponent<Props> = ({
  className, src, alt,
  style, containerStyle, imageStyle,
  bg, square, rectangle, background, circle, // Image modes
  width, maxWidth
}) =>

  <div
    className={concat('image__container', className)}
    style={{
      ...styles.default.container,
      ...(circle || square || rectangle ? {
        position: 'relative' as 'relative',
        overflow: 'hidden',
        width: '100%',
        textAlign: 'left'
      } : null),
      ...(circle ? {
        borderRadius: '50%'
      } : null),
      ...(background ? {
        background: `url(${src}) no-repeat center center fixed`,
        ...styles.background.container
      } : null),
      ...(width ? { width } : null),
      // ...(width && circle === true || square === true ? {
      //   height: width,
      //   paddingBottom: 0
      // } : null ),
      ...(maxWidth ? {
        maxWidth,
        margin: '0 auto'
      } : null),
      ...style,
      ...containerStyle
    }}>
    { !background
      ? <div
        className='image__inner-container'
        style={{
          ...(circle || square ? {
            paddingBottom: '100%'
          } : null),
          ...(rectangle ? {
            paddingBottom: '56%'
          } : null)
        }}>
        <img
          src={src}
          alt={alt || 'image'}
          style={{
            ...styles.default.image,
            ...(circle || square || rectangle ? {
              position: 'absolute' as 'absolute',
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            } : null),
            ...imageStyle
          }} />
      </div>
      : null }
  </div>

if (process.env.NODE_ENV !== 'production') {
  Image.propTypes = {
    /**
    * Exposes ability to set a custom class name
    **/
    className: PropTypes.string,
    src: PropTypes.string,
    alt: PropTypes.string,
    /**
    * Set any styles of the top level element of the component
    **/
    style: PropTypes.object,
    containerStyle: PropTypes.object,
    imageStyle: PropTypes.object,
    bg: PropTypes.bool,
    circle: PropTypes.bool,
    square: PropTypes.bool,
    rectangle: PropTypes.bool,
    /**
    * The background color of component
    **/
    background: PropTypes.bool,
    maxWidth: PropTypes.string,
    width: PropTypes.string
  }
}
export default Image
