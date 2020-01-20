import * as React from 'react'
import * as PropTypes from 'prop-types'
import { FunctionComponent, ReactNode } from 'react'
import styles from './styles'
import concat from '../_utility/concat'
import Hr from '../Hr'

interface Props {
  children?: [ReactNode] | ReactNode
  className?: string
  header?: [ReactNode] | ReactNode
  style?: object
  containerStyle?: object
  contentStyle?: object
  padding?: string
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}
/**
* a nice box with border and rounded corners
*/
const Panel: FunctionComponent<Props> = ({
  className, children, header,
  style, containerStyle, contentStyle,
  padding, // Padding for inner content
  onMouseEnter, onMouseLeave
}) => {
  return (
    <div
      className={concat('panel', className)}
      style={{
        ...styles.container,
        ...style,
        ...containerStyle
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}>

      {(header
        ? <div
          className='panel__header'
          style={styles.header}>

          {header}

        </div> : null)}
      {(header ? <Hr /> : null)}

      <div
        className='panel__content'
        style={{
          ...styles.content,
          ...contentStyle,
          ...(padding ? { padding: padding } : null)
        }}>
        {children}
      </div>

    </div>
  )
}

if (process.env.NODE_ENV !== 'production') {
  Panel.propTypes = {
  /**
  * Exposes ability to set a custom class name
  **/
    className: PropTypes.string,
    /**
  * Individual component or set of components accepted as children
  **/
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    header: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    /**
  * Set any styles of the top level element of the component
  **/
    style: PropTypes.object,
    containerStyle: PropTypes.object,
    contentStyle: PropTypes.object,
    padding: PropTypes.string,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func
  }
}

export default Panel
