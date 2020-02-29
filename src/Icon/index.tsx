import * as React from 'react'
import * as PropTypes from 'prop-types'
import { FunctionComponent, ReactNode } from 'react'
import styles from './styles'
import concat from '../_utility/concat'
import * as svgPaths from './svgPaths'

interface Props {
  children?: [ReactNode] | ReactNode
  className?: string
  name?: string
  icon?: () => void
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

if (process.env.NODE_ENV !== 'production') {
  Icon.propTypes = {
    /**
    * Exposes ability to set a custom class name
    **/
    className: PropTypes.string,
    /**
    * Individual component or set of components accepted as children
    **/
    children: PropTypes.string,
    name: PropTypes.string,
    icon: PropTypes.func,
    /**
    * The background color of component
    **/
    background: PropTypes.string,
    /**
    * The text color of component
    **/
    color: PropTypes.string,
    /**
    * Set any styles of the top level element of the component
    **/
    style: PropTypes.object,
    responsive: PropTypes.bool
  }
}
export default Icon
