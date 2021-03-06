import * as React from 'react'
import { FunctionComponent, ReactNode } from 'react'
import styles from './styles'
import Shape from '../Shape'
import concat from '../_utility/concat'

interface Props {
  children?: string | number
  className?: string
  icon?: ReactNode
  onClick?: (MouseEvent) => {}
  background?: string
  color?: string
  style?: object
}
/**
* a badge component that can be added to Icons to convey information
*/
const Badge: FunctionComponent<Props> = ({
  className,
  children, icon,
  onClick,
  background, color, style
}) =>
  <div
    className={concat('badge', className)}
    style={{
      ...styles.container,
      ...(background ? { background: background } : ''),
      ...(color ? { color: color } : ''),
      ...style
    }}>
    { children === null || children === undefined || (children as string).length === 1
      ? <Shape // Shows a circle if icon or count character length = 1
        className='badge__shape'
        circle
        style={{
          ...styles.shape,
          ...(children || icon ? {
            width: '1rem',
            left: '-0.5rem',
            top: '-0.5rem'
          } : null)
        }}>

        <div
          className='badge__shape__inner'
          style={{
            ...styles.shapeInner,
            ...(children ? {
              top: '50%'
            } : null),
            ...(icon ? {
              top: '0'
            } : null)
          }}>
          {icon !== undefined
            ? icon
            : children}
        </div>
      </Shape>

      : <div // Show a bubble with rounded corners if character length is greater than 1
        className='badge__shape-for-label'
        style={styles.shapeForLabel}>
        {children}
      </div> }

  </div>

export default Badge
