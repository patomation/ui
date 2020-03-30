import * as React from 'react'
import { FunctionComponent, ReactNode } from 'react'
import styles from './styles'
import extract from '../_utility/extract'

interface Props {
  children?: [ReactNode] | ReactNode
  className?: string
  background?: string
  color?: string
  style?: object
  size?: string
  bold?: boolean
}

const Typography: FunctionComponent<Props> = ({
  className, children,
  background, color, style,
  size = '1rem', bold = false
}) => {
  const { number, unit } = extract(size)

  return (
    <p
      className={className}
      style={{
        ...styles.container,
        ...(background ? { background: background } : null),
        ...(color ? { color: color } : null),
        display: 'inline-block',
        fontSize: `${number}${unit}`,
        // lineHeight: `${ ratio(number, 1) }${unit}`,
        ...(bold ? {
          fontWeight: 'bold'
        } : null),
        ...style
      }}>

      {children}

    </p>
  )
}

export default Typography
