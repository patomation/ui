import * as React from 'react'
import { useState, useEffect, FunctionComponent, ReactNode } from 'react'
import styles from './styles'
import concat from '../_utility/concat'

import Panel from '../Panel'
import Center from '../Center'
import IconButton from '../IconButton'
import Clickable from '../Clickable'

interface Props {
  children?: [ReactNode] | ReactNode
  className?: string
  show?: boolean
  onClose?: (bollean) => void
  background?: string
  color?: string
  style?: object
  maxWidth?: string
  width?: string
}

/**
* pop up modal with close button and overlay
*/
const Modal: FunctionComponent<Props> = ({
  show = false, onClose,
  className, children,
  background, color, style,
  width, maxWidth
}) => {
  const [open, setOpen] = useState(show)

  const close = (): void => {
    setOpen(false)
    if (onClose) onClose(false)
  }

  useEffect(() => {
    setOpen(show)
  }, [show])

  if (open) {
    return (
      <div
        className={concat('modal', className)}
        style={{
          ...styles.container,
          ...(background ? { background: background } : null),
          ...(color ? { color: color } : null),
          ...style
        }}>

        <Clickable
          className='modal__clickable'
          onClick={close}
          style={styles.background}>
        </Clickable>

        <Center
          className='modal__center'
          {...{
            width,
            maxWidth
          }}>

          <Panel
            className='modal__panel'>

            <IconButton
              className='modal__close'
              color={color}
              onClick={close}
              style={styles.close}
              icon='close' />

            {children}

          </Panel>
        </Center>

      </div>
    )
  } else {
    return null
  }
}

export default Modal
