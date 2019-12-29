import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'
import concat from '../_utility/concat.js'
/**
* make any shape block that you need
*/
const Shape = ({
  className, children,
  onClick,
  background = 'gold', color, style, width, maxWidth,
  square, circle, rectangle, triangle, portrait
}) =>

  <div
    onClick={onClick}
    className={concat('shape', className)}
    style={{
      ...styles.container,
      width,
      maxWidth,
      ...((width || maxWidth) ? {
        margin: '0 auto'
      } : null),
      ...style
    }}>

    <div
      className='shape__shape'
      style={{
        ...styles.shape,
        background: background,
        ...(color ? { color: color } : null),
        ...(circle ? { borderRadius: '50%' } : null),
        ...(rectangle ? { paddingBottom: '56%' } : null),
        ...(portrait ? { paddingBottom: '156%' } : null),
        ...(triangle ? {
          background: null,
          width: '100%',
          height: 0,
          paddingLeft: '50%',
          paddingBottom: '70%',
          overflow: 'hidden'
        } : null)
      }}>
      { triangle
        ? <div
          style={{
            content: '',
            display: 'block',
            width: '0',
            height: '0',
            marginLeft: '-500px',
            borderLeft: '500px solid transparent',
            borderRight: '500px solid transparent',
            // Modifying this changes the geometry of the triangle
            borderBottom: `700px solid ${background}`
          }}>
          {children}
        </div>
        : children
      }
    </div>

  </div>

Shape.propTypes = {
  /**
  * Exposes ability to set a custom class name
  **/
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  onClick: PropTypes.func,
  background: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object,
  /**
  * A square shape div
  **/
  square: PropTypes.bool,
  /**
  * A circle shape div
  **/
  circle: PropTypes.bool,
  /**
  * A rectangular shaped div
  **/
  rectangle: PropTypes.bool,
  /**
  * A traingle shaped div
  **/
  triangle: PropTypes.bool,
  /**
  * A portrait shaped div
  **/
  portrait: PropTypes.bool,
  /**
  * set the width of the shape
  **/
  width: PropTypes.string,
  /**
  * set the maximum width of the shape
  **/
  maxWidth: PropTypes.string
}

export default Shape
