import React from 'react';
import styles from './styles.js'
import { Gutter, Image } from '../'

export default ({
  className,
  background, color,
  style, titleStyle, descriptionStyle, imageStyle,
  children, title, description,
  image
}) => {


  return(
    <header
      className={className}
      style={{
        ...styles.container,
        ...( background ? { background: background } : null ),
        ...( color ? { color: color } : null ),
        ...style
      }}>

      { title ?
        <h1 style={{
          ...styles.title,
          ...titleStyle
        }}>
          { title }
        </h1> : null }

      { description ? <Gutter /> : null}

      { description ?
        <p style={{
          ...styles.description,
          ...descriptionStyle
        }}>
          { description }
        </p> : null }

      { children ? <Gutter /> : null}

      { children }

      <Image
        src={image}
        type={'background'}/>


    </header>
  )
}
