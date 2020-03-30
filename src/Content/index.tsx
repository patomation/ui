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
}
/**
* A contnet wrapper component
*/
const Content: FunctionComponent<Props> = ({
  className, children,
  background, color, style
}) => {
  return (
    <main
      className={concat('content', className)}
      style={{
        ...styles.container,
        ...(background ? { background: background } : null),
        ...(color ? { color: color } : null),
        ...style
      }}>

      {children}

    </main>
  )
}

export default Content
