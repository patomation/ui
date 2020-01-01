import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'
import concat from '../_utility/concat.js'

import { Grid, Image } from '../'
import config from '../config'
import find from '@patomation/find'
/**
* a grid of images
*/
const ImageGrid = ({
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

ImageGrid.propTypes = {
  /**
  * Exposes ability to set a custom class name
  **/
  className: PropTypes.string,
  /**
  * Individual component or set of components accepted as children
  **/
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  images: PropTypes.array,
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
  col: PropTypes.number,
  row: PropTypes.number,
  gap: PropTypes.string
}

export default ImageGrid
