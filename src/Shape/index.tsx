import * as React from 'react'
import { FunctionComponent, ReactNode } from 'react'
import styles from './styles'
import concat from '../_utility/concat'

interface Props {
  children?: [ReactNode] | ReactNode
  className?: string
  onClick?: (MouseEvent) => {}
  background?: string
  color?: string
  style?: object
  innerStyle?: object
  square?: boolean
  circle?: boolean
  rectangle?: boolean
  triangle?: boolean
  portrait?: boolean
  width?: string
  maxWidth?: string
}
/**
* make any shape block that you need
*/
const Shape: FunctionComponent<Props> = ({
  className, children,
  onClick,
  background = 'gold', color, style, innerStyle, width, maxWidth,
  square, circle, rectangle, triangle, portrait
}) =>

  <div
    onClick={onClick}
    className={concat('shape', className)}
    style={{
      ...styles.container,
      width,
      maxWidth,
      ...((width || maxWidth) ? {
        margin: '0 auto'
      } : null),
      ...style
    }}>

    <div
      className='shape__shape'
      style={{
        ...styles.shape,
        background: background,
        ...(color ? { color: color } : null),
        ...(circle ? { borderRadius: '50%' } : null),
        ...(rectangle ? { paddingBottom: '56%' } : null),
        ...(portrait ? { paddingBottom: '156%' } : null),
        ...(triangle ? {
          background: '',
          width: '100%',
          height: 0,
          paddingLeft: '50%',
          paddingBottom: '70%',
          overflow: 'hidden'
        } : null),
        ...innerStyle
      }}>
      { triangle
        ? <div
          style={{
            content: '',
            display: 'block',
            width: '0',
            height: '0',
            marginLeft: '-500px',
            borderLeft: '500px solid transparent',
            borderRight: '500px solid transparent',
            // Modifying this changes the geometry of the triangle
            borderBottom: `700px solid ${background}`
          }}>
          {children}
        </div>
        : children
      }
    </div>

  </div>

export default Shape
