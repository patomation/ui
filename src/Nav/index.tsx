import * as React from 'react'
import { FunctionComponent, ReactNode, ReactElement } from 'react'
import concat from '../_utility/concat'

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
      // ...styles.container,
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
        display: 'flex',
        // justifyContent: 'space-between'
        justifyContent: 'flex-end'
      }}>
      { React.Children.map(children, (child: ReactNode) => {
        return React.cloneElement(
          child as ReactElement<any>,
          {
            style: {
              // marginRight: '1rem'
            }
          })
      })}
    </div>

  </nav>

export default Nav
