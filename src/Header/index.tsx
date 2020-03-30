import * as React from 'react'
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

export default Header
