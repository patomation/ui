import * as React from 'react'
import * as PropTypes from 'prop-types'
import { FunctionComponent, ReactNode, ReactElement } from 'react'
import styles from './styles'
import concat from '../_utility/concat'
import config from '../config'

interface Props {
  children?: [ReactNode] | ReactNode
  className?: string
  background?: string
  color?: string
  style?: object
}
/**
* navigation component with custom child styles
*/
const Nav: FunctionComponent<Props> = ({
  className, children,
  background,
  color = '#ffffff',
  style
}) =>
  <nav
    className={concat('nav', className)}
    style={{
      ...styles.container,
      ...(background ? { background: background } : null),
      ...(color ? { color: color } : null),
      ...style
    }}>

    <style>
      {`
      .nav a {
        color: ${color};
        text-decoration: none;
      }
      `}

    </style>

    <div
      className='nav__container'
      style={{
        maxWidth: config.size.maxWidth,
        margin: '0 auto',
        display: 'flex'
      }}>
      { React.Children.map(children, (child: ReactNode) => {
        return React.cloneElement(
          child as ReactElement<any>,
          {
            style: {
              marginRight: '1rem'
            }
          })
      })}
    </div>

  </nav>

if (process.env.NODE_ENV !== 'production') {
  Nav.propTypes = {
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
    style: PropTypes.object
  }
}
export default Nav
