import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'
import Panel from '../Panel'
import Center from '../Center'
import IconButton from '../IconButton'

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
        className={ `modal ${className}` }
        style={{
          ...styles.container,
          ...(background ? { background: background } : null),
          ...(color ? { color: color } : null),
          ...style
        }}>

        <Center>
          <Panel style={styles.panel}>

            <IconButton
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
