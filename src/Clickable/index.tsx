import * as React from 'react'
import styles from './styles'
import concat from '../_utility/concat'
import { FunctionComponent, ReactNode } from 'react'

interface Props {
  children?: [ReactNode] | ReactNode
  className?: string
  onClick?: () => void
  background?: string
  color?: string
  style?: object
  disabled?: boolean
}
/**
* Wraps anything and makes it clickable
*/
const Clickable: FunctionComponent<Props> = ({
  className, children,
  onClick,
  background, color, style,
  disabled
}) =>

  <div
    onClick={() => {
      if (onClick && !disabled) onClick()
    }}
    className={concat('clickable', className)}
    style={{
      ...styles.container,
      ...(disabled ? styles.disabled : null),
      ...(background ? { background: background } : null),
      ...(color ? { color: color } : null),
      ...style
    }}>

    {children}

  </div>

export default Clickable
