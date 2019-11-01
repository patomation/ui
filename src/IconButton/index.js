import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'
import concat from '../_utility/concat.js'
import config from '../config.js'

import { Icon, Button, Badge } from '../'
/**
* a clickable icon button with hover and an optional title
**/
const IconButton = ({
  onClick, className,
  background, color,
  style, iconStyle, titleStyle, activeStyle,
  hoverColor,
  name, icon, active, title, width,
  badge
}) => {
  const [hover, setHover] = useState(false)

  return (
    <Button
      kind='none'
      className={concat('iconbutton', className)}
      onClick={onClick}
      style={{
        ...styles.container,
        ...(background ? { background: background } : null),
        ...(color ? { color: color } : null),
        ...(width ? { width: width } : null),
        ...style,
        ...(active ? styles.active : null),
        ...(active ? activeStyle : null)
      }}
      onHover={setHover}>

      <Icon
        className='iconbutton__icon'
        responsive={!!width}
        color={ hover
          ? (hoverColor || color || config.color.primary)
          : (color || config.color.primary) }
        style={{
          ...styles.icon,
          ...iconStyle
        }}
        name={icon || name}/>

      {title ? <div
        className='iconbutton__title'
        style={{
          ...styles.title,
          ...titleStyle
        }}>
        {title}
      </div> : null}

      {badge
        ? <Badge
          icon={typeof badge === 'string' ? badge : null}>
          {typeof badge === 'number' ? badge : null}
        </Badge>
        : null}

    </Button>
  )
}

IconButton.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  background: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object,
  iconStyle: PropTypes.object,
  titleStyle: PropTypes.object,
  activeStyle: PropTypes.object,
  name: PropTypes.string,
  icon: PropTypes.string,
  active: PropTypes.bool,
  title: PropTypes.string,
  width: PropTypes.string,
  hoverColor: PropTypes.string,
  badge: PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string])

}

export default IconButton
