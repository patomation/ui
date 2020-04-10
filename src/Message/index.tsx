import * as React from 'react'
import { FunctionComponent, ReactNode } from 'react'
import Row from '../Row'
import styles from './styles'
import config from '../config'
import { Info, Warning, CheckCircle, Error } from '../icons/index'

interface Props {
  children?: [ReactNode] | ReactNode
  className?: string
  onClick?: (MouseEvent) => {}
  background?: string
  color?: string
  style?: object
  kind?: 'info' | 'warning' | 'error' | 'success'
  title?: string
  icon?: ReactNode
}

const Message: FunctionComponent<Props> = ({
  className, children,
  onClick,
  background, color, style,
  kind = 'info',
  title,
  icon
}) => {
  let DefaultIcon
  const iconProps = {
    className: 'alert__icon',
    color: color || config.color[kind],
    style: {
      paddingRight: '0.75rem',
      marginBottom: 'auto' // Make left icon align to top
    }
  }
  switch (kind) {
    case 'info':
      DefaultIcon = <Info {...iconProps}/>
      break
    case 'warning':
      DefaultIcon = <Warning {...iconProps}/>
      break
    case 'error':
      DefaultIcon = <Error {...iconProps}/>
      break
    case 'success':
      DefaultIcon = <CheckCircle {...iconProps}/>
      break
    default:
      break
  }

  return (
    <div
      onClick={onClick}
      className={className}
      style={{
        ...styles.container,
        ...(background ? { background: background } : null),
        ...(color ? { color: color } : null),
        ...style
      }}>
      <Row
        className='alert__row'
        style={{
          ...styles.container,
          background: background || config.color[`${kind}Background`],
          ...(color ? { color: color } : null),
          padding: '0.75rem',
          paddingRight: '1rem',
          marginBottom: '1rem',
          border: `1px solid ${color || config.color[kind]}`,
          borderRadius: '3px',
          position: 'relative' as 'relative',
          ...style
        }}>

        { icon !== false && icon === undefined
          // use default icon
          ? DefaultIcon
          // use prop provided icon from the parent
          : icon
        }

        <div
          className='alert__content'
          style={{
            width: '100%',
            flexGrow: 1,
            ...(icon !== false ? { paddingLeft: '0.75rem' } : null)
          }}>
          { title
            ? <b style={{ display: 'block', paddingBottom: '0.5rem' }}>{ title }</b>
            : null }

          {children}

        </div>
      </Row>

    </div>
  )
}

export default Message
