import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'

import Icon from '../Icon'

const IconButton = ({
  onClick, className,
  background, color,
  style, iconStyle, titleStyle, activeStyle,
  name, icon, active, title, width
}) => {
  return (
    <div
      className={className}
      onClick={onClick}
      style={{
        ...styles.container,
        ...(background ? { background: background } : null),
        ...(color ? { color: color } : null),
        ...style,
        ...(active ? styles.active : null),
        ...(active ? activeStyle : null),
        ...(title ? { display: 'flex' } : null)
      }}>

      <Icon
        width={width}
        color={color}
        style={{
          ...styles.icon,
          ...iconStyle
        }}
        name={icon || name}/>

      {title ? <div
        style={{
          ...styles.title,
          ...titleStyle
        }}>
        {title}
      </div> : null}
    </div>
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
  title: PropTypes.string
}

export default IconButton
