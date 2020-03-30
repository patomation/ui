import * as React from 'react'
import { FunctionComponent, ReactNode } from 'react'
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
*  A sticky footer component obviously
*/
const Footer: FunctionComponent<Props> = ({
  className, children,
  background, color, style
}) => {
  return (
    <footer
      className={concat('footer', className)}
      style={{
        ...styles.container,
        ...(background ? { background: background } : null),
        ...(color ? { color: color } : null),
        ...style
      }}>
      <div
        className='footer__container'
        style={{
          maxWidth: config.size.maxWidth,
          margin: '0 auto'
        }}>
        {children}
      </div>

    </footer>
  )
}

export default Footer
