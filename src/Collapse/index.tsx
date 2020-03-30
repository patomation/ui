import * as React from 'react'
import { useState, useEffect, FunctionComponent, ReactNode } from 'react'
import styles from './styles'
import concat from '../_utility/concat'

interface Props {
  children?: [ReactNode] | ReactNode
  className?: string
  style?: object
  collapse?: boolean
  onComplete?: () => void
  speed?: number
}
/**
* A component that can collapse and hide content
*/
const Collapse: FunctionComponent<Props> = ({
  className, children, style,
  collapse, onComplete, speed = 400
}) => {
  const [height, setHeight] = useState('')
  let element
  useEffect(() => {
    if (element) {
      setHeight(`${element.clientHeight}px`)
    }
    // Callback when animation completes
    if (collapse && onComplete) setTimeout(onComplete, speed)
  }, [collapse, onComplete, element, speed])

  return (
    <div
      ref={ elm => {
        element = elm
      }}
      className={concat('collapse', className)}
      style={{
        ...styles.container,
        ...{
          transition: `width ${speed}ms ease-out, height ${speed}ms ease-out`,
          height: (collapse ? '0px' : height)
        },
        ...style
      }}>

      {children}

    </div>
  )
}

export default Collapse
