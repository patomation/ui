import * as React from 'react'
import * as PropTypes from 'prop-types'
import { FunctionComponent, ReactNode } from 'react'
import styles from './styles'

interface Props {
  children?: [ReactNode] | ReactNode
  className?: string
  onClick?: (MouseEvent) => {}
  background?: string
  color?: string
  style?: object
}

const Message: FunctionComponent<Props> = ({
  className, children,
  onClick,
  background, color, style
}) =>

  <div
    onClick={onClick}
    className={className}
    style={{
      ...styles.container,
      ...(background ? { background: background } : null),
      ...(color ? { color: color } : null),
      ...style
    }}>

    {children}

  </div>

if (process.env.NODE_ENV !== 'production') {
  Message.propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    onClick: PropTypes.func,
    background: PropTypes.string,
    color: PropTypes.string,
    style: PropTypes.object
  }
}

export default Message
