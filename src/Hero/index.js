import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'
import concat from '../_utility/concat.js'
import config from '../config.js'
import { Gutter, Image, Center, ScrollButton } from '../'
/**
* image with a title and description
*/
const Hero = ({
  className,
  background = '#333', color,
  overlayColor, overlayOpacity = '0.5',
  style, titleStyle, descriptionStyle, imageStyle,
  children, title, description,
  image,
  height
}) => {
  return (
    <header
      className={concat('hero', className)}
      style={{
        ...styles.container,
        ...(color ? { color: color } : null),
        fontFamily: config.fontFamily,
        ...style,
        ...(height ? {
          height,
          padding: 0
        } : null)
      }}>

      <Center style={{ left: 0 }} disabled={!height}>

        { title
          ? <h1 className='hero__title'
            style={{
              ...styles.title,
              ...titleStyle
            }}>
            { title }
          </h1> : null }

        { description && title ? <Gutter /> : null}

        { description
          ? <p className='hero__description'
            style={{
              ...styles.description,
              paddingTop: '2rem',
              ...descriptionStyle
            }}>
            { description }
          </p> : null }

        { children && (title || description) ? <Gutter /> : null}

        { children }

      </Center>

      { overlayColor
        ? <div
          className='hero__overlay'
          style={{
            ...styles.overlay,
            background: overlayColor,
            opacity: overlayOpacity
          }}
        ></div>
        : null }

      <Image
        className='hero__image'
        src={image}
        background />

      <div
        className='hero__background'
        style={{
          ...styles.background,
          ...(background ? { background: background } : null)
        }}
      ></div>

      { height
        ? <ScrollButton
          style = {{
            position: 'absolute',
            bottom: 0
          }}/>
        : null }

    </header>
  )
}

Hero.propTypes = {
  /**
  * Exposes ability to set a custom class name
  **/
  className: PropTypes.string,
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
  titleStyle: PropTypes.object,
  descriptionStyle: PropTypes.object,
  imageStyle: PropTypes.object,
  /**
  * Individual component or set of components accepted as children
  **/
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  height: PropTypes.number,
  overlayColor: PropTypes.string,
  overlayOpacity: PropTypes.string
}

export default Hero
