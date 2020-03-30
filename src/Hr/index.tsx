import * as React from 'react'
import { FunctionComponent, ReactNode } from 'react'
import styles from './styles'
import concat from '../_utility/concat'

interface Props {
  children?: [ReactNode] | ReactNode
  className?: string
  color?: string
  style?: object
  opacity?: number
}
/**
* fancy line component
*/
const Hr: FunctionComponent<Props> = ({
  className, color = '#000000', opacity = 0.3, style
}) => {
  return (
    <hr
      className={concat('hr', className)}
      style={{
        ...styles.container,
        border: `1px solid ${color}`,
        opacity,
        ...style
      }} />
  )
}

export default Hr
