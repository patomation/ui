import * as React from 'react'
import { FunctionComponent, ReactNode } from 'react'
import styles from './styles'
import concat from '../_utility/concat'

import Grid from '../Grid'
import Image from '../Image'

import config from '../config'
import find from '@patomation/find'

interface Props {
  children?: ReactNode[] | ReactNode
  className?: string
  images?: any[]
  background?: string
  color?: string
  style?: object
  col?: number
  row?: number
  gap?: string
}
/**
* a grid of images
*/
const ImageGrid: FunctionComponent<Props> = ({
  className, children, images,
  background, color, style,
  col, row, gap
}) =>

  <Grid
    className={concat('imagegrid', className)}
    style={{
      ...styles.container,
      ...(background ? { background: background } : null),
      ...(color ? { color: color } : null),
      ...style
    }}
    col={col || 3}
    row={row}
    gap={gap || config.size.gutters}>

    {images
      ? images.map((image, index) =>
        <Image
          key={`image-grid-image-${index}`}
          className='imagegrid__image'
          src={image}
          square />)

      : React.Children.map(children, (child, index) => {
        const src = find('src', child)
        return (
          src
            ? <Image
              key={`image-grid-image-${index}`}
              src={src}
              className='imagegrid__image'
              square />
            : null)
      })
    }

  </Grid>

export default ImageGrid
