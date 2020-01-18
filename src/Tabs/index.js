import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'
import concat from '../_utility/concat.js'

import Grid from '../Grid'
import Clickable from '../Clickable'

/**
* a fancy file folder tab ui menu
*/
const Tabs = ({
  className,
  onClick,
  background, color, style,
  data = [], active, step
}) =>

  <Grid
    className={concat('tabs', className)}
    col={data.length}
    gap='1rem'
    style={{
      ...styles.container,
      ...(background ? { background: background } : null),
      ...(color ? { color: color } : null),
      ...style
    }}>

    {data.map((item, index) =>
      <Clickable
        className='tabs__tab'
        disabled={step ? active === item || index > data.indexOf(active) : null}
        onClick={() => {
          if (onClick) onClick(item, index)
        }}
        key={`tab_${index}`}
        style={{
          ...styles.tab,
          ...(active === item ? styles.active : null)
        }}>
        {item}
      </Clickable>
    )}

  </Grid>

if (process.env.NODE_ENV !== 'production') {
  Tabs.propTypes = {
  /**
  * Exposes ability to set a custom class name
  **/
    className: PropTypes.string,
    /**
  * click event passes up item name and index
  **/
    onClick: PropTypes.func,
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
    /**
  * string names for tabs
  **/
    data: PropTypes.array,
    /**
  * if defined, disable all those after active index
  **/
    step: PropTypes.bool,
    /**
  * If matches one of the sting from data it will become active
  **/
    active: PropTypes.string
  }
}

export default Tabs
