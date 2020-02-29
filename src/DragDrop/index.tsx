import * as React from 'react'
import * as PropTypes from 'prop-types'
import { FunctionComponent, ReactNode, DragEvent } from 'react'
import styles from './styles'
import concat from '../_utility/concat'
import useToggle from '@patomation/usetoggle'

type SetData = (arg0: string, arg1: string) => void

type DragStartEvent = DragEvent & {
  dataTransfer: {
    setData: SetData
  }
}

interface Props {
  children?: [ReactNode] | ReactNode
  className?: string
  background?: string
  color?: string
  style?: object
  onDragStart?: (DragEvent) => void
  onDragOver?: (DragEvent) => void
  onDrop?: (DragEvent) => void
  onDragLeave?: (DragEvent) => void
  onDrag?: (DragEvent) => void
  draggable?: boolean
}
/**
* Makes child element draggable or a drop zone
*/
const DragDrop: FunctionComponent<Props> = ({
  className, children,
  background, color, style,
  onDragStart, onDragOver, onDrop, onDragLeave, onDrag,
  draggable = true
}: Props ) => {
  const [over, setOver] = useToggle(false)

  return (
    <div
      className={concat('dragdrop', className)}
      draggable={draggable} // Use draggable prop but default to true
      onDragStart={(e: DragStartEvent) => {
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
      onDragLeave={(e) => {
        setOver(false)
        if (onDragLeave) onDragLeave(e)
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

if (process.env.NODE_ENV !== 'production') {
  DragDrop.propTypes = {
    /**
    * Exposes ability to set a custom class name
    **/
    className: PropTypes.string,
    /**
    * Individual component or set of components accepted as children
    **/
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    /**
    * The background color of component
    **/
    background: PropTypes.string,
    /**
    * The text color of component
    **/
    color: PropTypes.string,
    /**
    * Set any styles of the top level element of the component
    **/
    style: PropTypes.object,
    onDragStart: PropTypes.func,
    onDragOver: PropTypes.func,
    onDrop: PropTypes.func,
    onDragLeave: PropTypes.func,
    onDrag: PropTypes.func,
    draggable: PropTypes.bool
  }
}

export default DragDrop
