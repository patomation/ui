import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'
import svgPaths from './svgPaths.json'

// { children || name || icon }
const Icon = ({
  className, children,
  name, icon,
  background, color, style,
  width
}) => {
  if (name === 'play') name = 'play_arrow'

  const { path, size } = svgPaths[children || name || icon] || { path: null, size: null }

  const Tag = (width) ? 'div' : 'span'

  return path && size
    ? <Tag style={{
      ...styles.container,
      ...(width ? { width: width } : null),
      ...style
    }}>
      <svg
        className={className}
        style={{
          ...styles.icon,
          ...(background ? { backgroundColor: background } : null)
        }}
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
        width={width ? null : size}
        height={width ? null : size}
        preserveAspectRatio="xMidYMid meet"
        version="1.1"
        viewBox={`0 0 ${size} ${size}`}
      >
        <path
          d={path}
        />
      </svg>
    </Tag> : null
}

Icon.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
  name: PropTypes.string,
  icon: PropTypes.func,
  background: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object,
  width: PropTypes.string
}

export default Icon
