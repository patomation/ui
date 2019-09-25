import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'
import svgPaths from './svgPaths.js'

// { children || name || icon }
const Icon = ({
  className, children,
  name, icon,
  background, color, style,
  responsive
}) => {
  if (name === 'play') name = 'play_arrow'

  const { path, size } = svgPaths[children || name || icon] || { path: null, size: null }

  return path && size
    ? <svg
      className={className}
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

Icon.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
  name: PropTypes.string,
  icon: PropTypes.func,
  background: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object,
  responsive: PropTypes.bool
}

export default Icon
