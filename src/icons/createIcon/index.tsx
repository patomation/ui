import React from 'react'
import concat from '../../_utility/concat'
import styles from './styles'

interface Props {
  className?: string
  background?: string
  color?: string
  style?: object
  responsive?: boolean
}
type Icon = (Props) => React.ReactElement

interface createIconArgs {
  name: string
  path: string
  size: string
}

export const createIcon = ({ name, path, size }: createIconArgs): Icon => {
  const Icon = ({
    className,
    background, color, style,
    responsive
  }: Props): React.ReactElement => {
    return (
      <svg
        className={concat(name, 'icon', className)}
        style={{
          ...styles.icon,
          ...(background ? { backgroundColor: background } : null),
          ...style
        }}
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
        width={responsive ? null : size}
        height={responsive ? null : size}
        preserveAspectRatio="xMidYMid meet"
        version="1.1"
        viewBox={`0 0 ${size} ${size}`}
      >
        <path
          d={path}
        />
      </svg>
    )
  }
  return Icon
}
