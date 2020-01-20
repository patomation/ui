import * as React from 'react'
import * as PropTypes from 'prop-types'
import { FunctionComponent, ReactNode } from 'react'
import styles from './styles'
import concat from '../_utility/concat'

interface Props {
  children?: [ReactNode] | ReactNode
  className?: string
  background?: string
  color?: string
  style?: object
  contentStyle?: object
  width?: string
  maxWidth?: string
  disabled?: boolean
}
/**
* Aligns any content to the center both vertically and horizontally
*/
const Center: FunctionComponent<Props> = ({
  className, children,
  background, color, style, contentStyle,
  width, maxWidth,
  disabled
}) =>
  <div
    className={concat('center', className)}
    style={{
      ...(!disabled ? styles.container : null),
      ...(background ? { background: background } : null),
      ...(color ? { color: color } : null),
      ...style
    }}>

    <div
      className='center__content'
      style={{
        ...(!disabled ? styles.content : null),
        ...(width ? { width: width } : null),
        ...(maxWidth ? { maxWidth: maxWidth } : null),
        ...contentStyle
      }}>

      {children}

    </div>

  </div>

if (process.env.NODE_ENV !== 'production') {
  Center.propTypes = {
    /**
    * Exposes ability to set a custom class name
    **/
    className: PropTypes.string,
    /**
    * Individual component or set of components accepted as children
    **/
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
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
    contentStyle: PropTypes.object,
    width: PropTypes.string,
    maxWidth: PropTypes.string,
    disabled: PropTypes.bool
  }
}
Center.defaultProps = {
  disabled: false
}

export default Center
