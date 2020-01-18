import * as React from 'react'
import * as PropTypes from 'prop-types'
import styles from './styles'
import concat from '../_utility/concat'
/**
* make any shape block that you need
*/
const Shape = ({
  className, children,
  onClick,
  background = 'gold', color, style, innerStyle, width, maxWidth,
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
        } : null),
        ...innerStyle
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

if (process.env.NODE_ENV !== 'production') {
  Shape.propTypes = {
  /**
  * Exposes ability to set a custom class name
  **/
    className: PropTypes.string,
    /**
  * Individual component or set of components accepted as children
  **/
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    onClick: PropTypes.func,
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
    /**
  *
  **/
    innerStyle: PropTypes.object,
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
}

export default Shape
