import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'
import concat from '../_utility/concat.js'
import { Panel, Center, IconButton, Clickable } from '../'

const Modal = ({
  show, onClose,
  className, children,
  background, color, style
}) => {
  const [open, setOpen] = useState(show || false)

  const close = () => {
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

        <Center className='modal__center'>

          <Panel
            className='modal__panel'
            style={styles.panel}>

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

Modal.propTypes = {
  show: PropTypes.bool,
  onClose: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  background: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object
}

export default Modal
