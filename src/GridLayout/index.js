import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'
import concat from '../../utility/concat.js'
import config from '../config.js'
import { Grid } from '../'
import mediaQuery from '../../utility/mediaQuery.js'

const GridLayout = ({
  className, children,
  onClick,
  background, color, style,
  col, gap
}) => {
  const { lg } = config.size.media

  return (<>

<style>
  {mediaQuery({
    max: lg,
    css: {
      '.grid-layout': {
        gridTemplateColumns: '100% !important'
      // gridTemplateColumns: `repeat(auto-fit, minmax(${extract(lg).number/(col || 2)}${extract(lg).unit}, 1fr)) !important`
      }
    }
  })}
</style>
<Grid
  col={col}
  gap={gap}
  onClick={onClick}
  className={concat('gridlayout', className)}
  style={{
    ...styles.container,
    ...(background ? { background: background } : null),
    ...(color ? { color: color } : null),
    ...style
  }}>

  {children}

</Grid>
</>
  )
}

GridLayout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  onClick: PropTypes.func,
  background: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object,
  col: PropTypes.number,
  gap: PropTypes.string
}

export default GridLayout
