import * as React from 'react'
import { FunctionComponent, ReactNode } from 'react'
import styles from './styles'
import concat from '../_utility/concat'
// import config from '../config'

import { Cake } from '../icons/Cake'
import Button from '../Button'
import Badge from '../Badge'

interface Props {
  children?: ReactNode
  icon?: ReactNode
  onClick?: () => void
  className?: string
  background?: string
  color?: string
  style?: object
  iconStyle?: object
  titleStyle?: object
  activeStyle?: object
  name?: string
  active?: boolean
  title?: string
  width?: string
  hoverColor?: string
  badge?: boolean | number | string
}
/**
* a clickable icon button with hover and an optional title
**/
const IconButton: FunctionComponent<Props> = ({
  onClick, className,
  background, color,
  style, iconStyle, titleStyle, activeStyle,
  hoverColor,
  icon, children,
  active, title, width,
  badge
}) => {
  return (
    <Button
      className={concat('iconbutton', className)}
      onClick={onClick}
      style={{
        ...styles.container,
        padding: 0,
        background: 'none',
        border: 0,
        ...(background ? { background: background } : null),
        ...(color ? { color: color } : null),
        ...(width ? { width: width } : null),
        ...style,
        ...(active ? styles.active : null),
        ...(active ? activeStyle : null)
      }}>

      { icon !== undefined
        ? icon
        : children !== undefined
          ? children
          : <Cake
            className='iconbutton__icon'
            responsive={!!width}
            style={{
              ...styles.icon,
              ...iconStyle
            }}
            name={icon || name}/>
      }

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
          icon={typeof badge === 'string' ? badge : ''}>
          {typeof badge === 'number' ? badge : ''}
        </Badge>
        : null}

    </Button>
  )
}

export default IconButton
