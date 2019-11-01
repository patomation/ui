import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'
import concat from '../_utility/concat.js'
import { Grid, Clickable } from '../'

const Tabs = ({
  className,
  onClick,
  background, color, style,
  data, active, step
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

Tabs.propTypes = {
  className: PropTypes.string,
  /**
  * click event passes up item name and index
  **/
  onClick: PropTypes.func,
  background: PropTypes.string,
  color: PropTypes.string,
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

Tabs.defaultProps = {
  data: []
}

export default Tabs
