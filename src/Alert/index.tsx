import * as React from 'react'
import { useState, FunctionComponent, ReactNode } from 'react'
import styles from './styles'
import Row from '../Row'
import IconButton from '../IconButton'
import Collapse from '../Collapse'
import config from '../config'
import { Info } from '../icons/Info'
import { Warning } from '../icons/Warning'
import { CheckCircle } from '../icons/CheckCircle'
import { Error } from '../icons/Error'
import { Close } from '../icons/Close'

interface Props {
  children?: [ReactNode] | ReactNode
  className?: string
  title?: string
  icon?: boolean | ReactNode
  kind?: 'info' | 'warning' | 'error' | 'success'
  closeable?: boolean
  onClose?: (boolean) => boolean
  background?: string
  color?: string
  style?: object
}

const Alert: FunctionComponent<Props> = ({
  title, children,
  background, color, style,
  kind = 'info',
  onClose,
  icon = true,
  closeable = true
}) => {
  const [open, setOpen] = useState(true)
  const [collapse, setCollapse] = useState(false)

  const close = (): void => {
    setCollapse(true)
    if (onClose) onClose(false)
  }

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

  return open
    ? <Collapse
      className={'alert'}
      collapse={collapse}
      onComplete={() => {
        setOpen(false)
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

        { (icon !== false && icon === true)
          // use default icon
          ? DefaultIcon
          // use prop provided icon from the parent
          : icon
        }

        <div
          className='alert__content'
          style={{
            width: '100%',
            ...(closeable ? { width: '75%' } : null),
            flexGrow: 1
          }}>
          { title
            ? <b style={{ display: 'block', paddingBottom: '0.5rem' }}>{ title }</b>
            : null }

          {children}

        </div>

        { closeable
          ? <IconButton
            className='modal__close'
            onClick={close}
            icon={<Close color='rgba(0,0,0,0.5)'/>}
            style={{
              // position: 'absolute' as 'absolute',
              // right: '0.75rem',
              // top: '0.75rem'
              marginBottom: 'auto' // Make right close icon align to top
            }} />
          : null }

      </Row>
    </Collapse>
    : null
}

export default Alert
