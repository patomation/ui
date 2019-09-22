import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'

import { Grid, Image } from '../'
import config from '../config'
import check from '../../utility/check'

const ImageGrid = ({
  className, children, images,
  background, color, style,
  col, row, gap
}) =>

  <Grid
    className={className || 'image-grid'}
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
      ? images.map( image => <Image src={image} square />)
      : React.Children.map(children, (child, index) => {
      if (check(child, 'props.children[0].props.src')) {
        return <Image src={child.props.children[0].props.src} square />
      }
    }
    )}

  </Grid>

ImageGrid.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  images: PropTypes.array,
  background: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object,
  col: PropTypes.string,
  row: PropTypes.string,
  gap: PropTypes.string
}

export default ImageGrid
