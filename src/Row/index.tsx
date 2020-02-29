import * as React from 'react'
import * as PropTypes from 'prop-types'
import { FunctionComponent, ReactNode, ReactElement } from 'react'
import styles from './styles'
import concat from '../_utility/concat'
import config from '../config'

interface Props {
  children?: [ReactNode] | ReactNode
  className?: string
  style?: object
  gap?: boolean
}

/**
* display flex row
*/
const Row: FunctionComponent<Props> = ({
  className, children, style, gap
}) =>

  <div
    className={concat('row', className)}
    style={{
      ...styles.container,
      ...style
    }}>

    { gap
      ? React.Children.map(children, child => {
        return React.cloneElement(
          child as ReactElement<any>,
          {
            style: {
              marginRight: config.size.gutters
            }
          })
      })
      : children
    }

  </div>

if (process.env.NODE_ENV !== 'production') {
  Row.propTypes = {
  /**
  * Exposes ability to set a custom class name
  **/
    className: PropTypes.string,
    /**
  * Individual component or set of components accepted as children
  **/
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    /**
  * Set any styles of the top level element of the component
  **/
    style: PropTypes.object,
    /**
  * If gap is defined a vertical gutter will get added to all children
  **/
    gap: PropTypes.bool
  }
}

export default Row
