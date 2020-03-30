import * as React from 'react'
import { useState, FunctionComponent, ReactNode } from 'react'
import styles from './styles'
import concat from '../_utility/concat'

interface Props {
  children?: [ReactNode] | ReactNode
  className?: string
  onClick?: (MouseEvent) => {}
  onHover?: (boolean) => void
  background?: string
  color?: string
  style?: object
  href?: string
  hoverStyle?: object
}
/**
* a component for making nice links
*/
const Link: FunctionComponent<Props> = ({
  className, children,
  onClick, background,
  color, style, href, hoverStyle,
  onHover
}) => {
  const [hover, setHover] = useState(false)

  return (
    <a
      onMouseEnter={() => {
        setHover(true)
        if (onHover) onHover(true)
      }}
      onMouseLeave={() => {
        setHover(false)
        if (onHover) onHover(false)
      }}
      href={href}
      onClick={onClick}
      className={concat('link', className)}
      style={{
        ...styles.container,
        ...(background ? { background: background } : null),
        ...(color ? { color: color } : null),
        ...style,
        ...(hover ? { ...styles.hover, ...hoverStyle } : null)
      }}>

      {children}

    </a>
  )
}

export default Link
