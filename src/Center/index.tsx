import * as React from 'react'
import { FunctionComponent, ReactNode } from 'react'
import styles from './styles'
import concat from '../_utility/concat'

interface Props {
  children?: [ReactNode] | ReactNode
  className?: string
  background?: string
  color?: string
  style?: object
  contentStyle?: object
  width?: string
  maxWidth?: string
  disabled?: boolean
}
/**
* Aligns any content to the center both vertically and horizontally
*/
const Center: FunctionComponent<Props> = ({
  className, children,
  background, color, style, contentStyle,
  width, maxWidth,
  disabled = false
}) =>
  <div
    className={concat('center', className)}
    style={{
      ...(!disabled ? styles.container : null),
      ...(background ? { background: background } : null),
      ...(color ? { color: color } : null),
      ...style
    }}>

    <div
      className='center__content'
      style={{
        ...(!disabled ? styles.content : null),
        ...(width ? { width: width } : null),
        ...(maxWidth ? { maxWidth: maxWidth } : null),
        ...contentStyle
      }}>

      {children}

    </div>

  </div>

export default Center
