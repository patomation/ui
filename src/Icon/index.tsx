import * as React from 'react'
import { FunctionComponent } from 'react'
import styles from './styles'
import concat from '../_utility/concat'
import svgPaths from './svgPaths'

interface Props {
  children?: string
  className?: string
  name?: string
  icon?: string
  background?: string
  color?: string
  style?: object
  responsive?: boolean
}
/**
* svg material icon
*/
const Icon: FunctionComponent<Props> = ({
  className, children,
  name, icon,
  background, color, style,
  responsive
}) => {
  if (name === 'play') name = 'play_arrow'
  // badcomment
  const { path, size } = svgPaths[children || name || icon] || { path: null, size: null }

  return path && size
    ? <svg
      className={concat('icon', className)}
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
    </svg> : null
}

export default Icon
