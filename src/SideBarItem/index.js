import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'
import concat from '../../utility/concat.js'

import Icon from '../Icon'
import Grid from '../Grid'

const SideBarItem = ({
  className, onClick,
  background, color, icon,
  style, hoverStyle,
  title, onHover
}) => {
  const [hover, setHover] = useState(false)

  return (
    <Grid
      className={concat('sidebaritem', className)}
      onClick={onClick}
      onMouseEnter={() => {
        setHover(true)
        if (onHover) onHover(true)
      }}
      onMouseLeave={() => {
        setHover(false)
        if (onHover) onHover(false)
      }}
      style={{
        ...styles.container,
        ...(background ? { background: background } : null),
        ...(color ? { color: color } : null),
        ...(hover ? { ...styles.hover, ...hoverStyle } : null),
        ...style
      }}
      col={4}>

      <Icon
        className='sidebaritem__icon'
        name={icon}
        style={styles.icon}/>

      <div
        className='sidebaritem__title'
        style={styles.title}>
        {title}
      </div>

    </Grid>
  )
}

SideBarItem.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  background: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.func,
  style: PropTypes.object,
  hoverStyle: PropTypes.object,
  title: PropTypes.string,
  onHover: PropTypes.func
}

export default SideBarItem
