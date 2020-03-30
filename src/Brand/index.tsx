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
}
/**
* A component for displaying the company brand or logo
*/
const Brand: FunctionComponent<Props> = ({
  className, children,
  onClick,
  background, color = '#333', style
}) =>

  <span
    onClick={onClick}
    className={concat('brand', className)}
    style={{
      ...styles.container,
      ...(background ? { background: background } : null),
      ...(color ? { color: color } : null),
      ...style
    }}>

    {children}

  </span>

export default Brand
