import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'
import concat from '../_utility/concat.js'

import useToggle from '@patomation/usetoggle'

const DragDrop = ({
  className, children,
  background, color, style,
  onDragStart, onDragOver, onDrop, onDragLeave, onDrag,
  draggable
}) => {
  const [over, setOver] = useToggle(false)

  return (
    <div
      className={concat('dragdrop', className)}
      draggable={draggable} // Use draggable prop but default to true
      onDragStart={e => {
        // Allow firefox to drag n drop - We have to setData with anything to make it work....
        e.dataTransfer.setData('text', '')
        // Buble up
        if (onDragStart) onDragStart(e)
      }}
      onDrag={onDrag}
      onDragOver={(e) => {
        // Lets us drop stuff here
        e.preventDefault()
        // Allow only one drg over event at one time.
        // Prevent retriggering
        if (!over) {
          setOver(true)
          if (onDragOver) onDragOver(e)
        }
      }}
      onDragLeave={() => {
        setOver(false)
        if (onDragLeave) onDragLeave()
      }}
      onDrop={onDrop}
      style={{
        ...styles.container,
        ...(draggable !== false ? { cursor: 'grab' } : null),
        ...(background ? { background: background } : null),
        ...(color ? { color: color } : null),
        ...style
      }}>

      {children}

    </div>
  )
}

DragDrop.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  background: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object,
  onDragStart: PropTypes.func,
  onDragOver: PropTypes.func,
  onDrop: PropTypes.func,
  onDragLeave: PropTypes.func,
  onDrag: PropTypes.func,
  draggable: PropTypes.bool
}

DragDrop.defaultProps = {
  draggable: true
}

export default DragDrop
