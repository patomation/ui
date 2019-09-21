import React from 'react'
import styles from './styles.js'

import { Grid, Image } from '../'
import config from '../config'
import check from '../../utility/check'

const ImageGrid = ({
  className, children,
  background, color, style,
  col, row, gap,
}) =>

<Grid
  className={className || 'image-grid'}
  style={{
    ...styles.container,
    ...( background ? { background: background } : null ),
    ...( color ? { color: color } : null ),
    ...style
  }}
  col={col}
  row={row}
  gap={gap || config.size.gutters}>

  {React.Children.map(children, (child, index) => {
    if( check(child, 'props.children[0].props.src') ) {
      return <Image src={child.props.children[0].props.src} square />
    }
  }
  )}

</Grid>

export default ImageGrid
