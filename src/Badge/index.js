import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'
import { Shape, Icon } from '../'
import concat from '../../utility/concat.js'
/**
* a badge component that can be added to Icons to convey information
*/
const Badge = ({
  className,
  children, icon,
  onClick,
  background, color, style
}) =>
  <div
    className={concat('badge', className)}
    style={{
      ...styles.container,
      ...(background ? { background: background } : null),
      ...(color ? { color: color } : null),
      ...style
    }}>
    { children === null || children === undefined || `${children}`.length === 1
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
          {icon
            ? <Icon
              className='badge__icon'
              responsive={true}
              style={styles.icon}
              name={icon} />
            : children}
        </div>
      </Shape>

      : <div // Show a bubble with rounded corners if character length is greater than 1
        className='badge__shape-for-label'
        style={styles.shapeForLabel}>
        {children}
      </div> }

  </div>

Badge.propTypes = {
  /**
  * Exposes additional className
  */
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  icon: PropTypes.string,
  onClick: PropTypes.func,
  background: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object
}

Badge.defaultProps = {
}

export default Badge