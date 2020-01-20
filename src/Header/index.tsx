import * as React from 'react'
import * as PropTypes from 'prop-types'
import { FunctionComponent, ReactNode } from 'react'
import styles from './styles'
import concat from '../_utility/concat'
import config from '../config'

interface Props {
  children?: [ReactNode] | ReactNode
  className?: string
  onClick?: (MouseEvent) => {}
  background?: string
  color?: string
  style?: object
}
/**
* Header component with custom flavor
*/
const Header: FunctionComponent<Props> = ({
  className, onClick, children,
  background = '#333',
  color = '#ffffff',
  style
}) => {
  return (
    <header
      className={concat('header', className)}
      onClick={onClick}
      style={{
        ...styles.container,
        ...(background ? { background: background } : null),
        ...(color ? { color: color } : null),
        ...style
      }}>

      <div
        className='header__container'
        style={{
          maxWidth: config.size.maxWidth,
          margin: '0 auto'
        }}>

        {children}

      </div>

    </header>
  )
}

if (process.env.NODE_ENV !== 'production') {
  Header.propTypes = {
    /**
    * Exposes ability to set a custom class name
    **/
    className: PropTypes.string,
    onClick: PropTypes.func,
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
    style: PropTypes.object
  }
}

export default Header
