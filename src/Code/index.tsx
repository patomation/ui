import * as React from 'react'
import * as PropTypes from 'prop-types'
import styles from './styles'
import concat from '../_utility/concat'

/**
* A component for displaying code samples
*/
const Code = ({
  className, block,
  children,
  background = '#333', color = '#ffffff', style
}) =>

  <div
    className={concat('code', className)}
    style={{
      ...styles.container,
      ...(background ? { background: background } : null),
      ...(color ? { color: color } : null),
      borderRadius: '0.5rem',
      ...style
    }}>

    <pre>
      <code>

        { children || block }

      </code>
    </pre>
  </div>

if (process.env.NODE_ENV !== 'production') {
  Code.propTypes = {
    /**
    * Exposes ability to set a custom class name
    **/
    className: PropTypes.string,
    /**
    * Individual component or set of components accepted as children
    **/
    children: PropTypes.string,
    block: PropTypes.string,
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
    style: PropTypes.object
  }
}

export default Code
