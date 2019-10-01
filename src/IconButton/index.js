import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'
import concat from '../../utility/concat.js'
import config from '../config.js'

import { Icon, Button, Badge } from '../'

const IconButton = ({
  onClick, className,
  background, color,
  style, iconStyle, titleStyle, activeStyle,
  name, icon, active, title, width,
  badge
}) => {
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
      }}>

      <Icon
        className='iconbutton__icon'
        responsive={!!width}
        color={color || config.color.primary}
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
  badge: PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string])

}

export default IconButton
