import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'
import config from '../config.js'
import { Grid } from '../'
import mediaQuery from '../../utility/mediaQuery.js'
import extract from '../../utility/extract.js'


const GridLayout = ({
  className, children,
  onClick,
  background, color, style,
  col
}) => {

const { lg } = config.size.media;

return (<>

<style>
  {mediaQuery({max:lg, css:{
    '.grid-layout': {
      gridTemplateColumns: '100% !important',
      // gridTemplateColumns: `repeat(auto-fit, minmax(${extract(lg).number/(col || 2)}${extract(lg).unit}, 1fr)) !important`
    }
  }})}
</style>
<Grid
  col={3}
  onClick={onClick}
  className={'grid-layout '+ className}
  style={{
    ...styles.container,
    ...( background ? { background: background } : null ),
    ...( color ? { color: color } : null ),
    ...style
  }}>

  {children}

</Grid>
<Grid
  col={3}
  breakWidth='961px'
  onClick={onClick}
  className={className}
  style={{
    ...styles.container,
    ...( background ? { background: background } : null ),
    ...( color ? { color: color } : null ),
    ...style
  }}>

  {children}

</Grid>
</>
)}

GridLayout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  onClick: PropTypes.func,
  background: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object,
  col: PropTypes.number
}


export default GridLayout
