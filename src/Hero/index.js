import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'
import concat from '../_utility/concat.js'
import { Gutter, Image } from '../'

const Hero = ({
  className,
  background, color,
  style, titleStyle, descriptionStyle, imageStyle,
  children, title, description,
  image
}) => {
  return (
    <header
      className={concat('hero', className)}
      style={{
        ...styles.container,
        ...(color ? { color: color } : null),
        ...style
      }}>

      { title
        ? <h1 className='hero__title'
          style={{
            ...styles.title,
            ...titleStyle
          }}>
          { title }
        </h1> : null }

      { description ? <Gutter /> : null}

      { description
        ? <p className='hero__description'
          style={{
            ...styles.description,
            ...descriptionStyle
          }}>
          { description }
        </p> : null }

      { children ? <Gutter /> : null}

      { children }

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

    </header>
  )
}

Hero.propTypes = {
  className: PropTypes.string,
  background: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object,
  titleStyle: PropTypes.object,
  descriptionStyle: PropTypes.object,
  imageStyle: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string
}

export default Hero
