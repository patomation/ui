import * as React from 'react'
import { FunctionComponent, ReactNode } from 'react'
import styles from './styles'
import concat from '../_utility/concat'
import config from '../config'

import Gutter from '../Gutter'
import Image from '../Image'
import Center from '../Center'
import ScrollButton from '../ScrollButton'

interface Props {
  children?: [ReactNode] | ReactNode
  className?: string
  background?: string
  color?: string
  style?: object
  titleStyle?: object
  descriptionStyle?: object
  imageStyle?: object
  title?: string
  description?: string
  image?: string
  height?: number
  overlayColor?: string
  overlayOpacity?: string
}

/**
* image with a title and description
*/
const Hero: FunctionComponent<Props> = ({
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
            position: 'absolute' as 'absolute',
            bottom: 0
          }}/>
        : null }

    </header>
  )
}

export default Hero
