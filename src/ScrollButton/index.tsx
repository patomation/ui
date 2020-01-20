import * as React from 'react'
import { useRef, FunctionComponent, ReactNode } from 'react'
import * as PropTypes from 'prop-types'
import styles from './styles'
import IconButton from '../IconButton'

type ScrollIntoView = (object) => void

type HTMLRef = HTMLDivElement & {
  ref: {
    current: {
      scrollIntoView: ScrollIntoView
    }
  } | null
}

interface Props {
  children?: [ReactNode] | ReactNode
  onClick?: (MouseEvent) => {}
  background?: string
  color?: string
  style?: object
}
/**
* An arrow button that scrolls to the bottom of itself revealing what is bellow
*/
const ScrollButton: FunctionComponent<Props> = ({
  onClick,
  background, color = '#ffffff', style
}) => {
  const ref = useRef<HTMLRef>(null)

  return (
    <div
      onClick={onClick}
      className={'scroll-button'}
      style={{
        ...styles.container,
        ...(background ? { background: background } : null),
        ...(color ? { color: color } : null),
        position: 'relative' as 'relative',
        width: '100%',
        textAlign: 'center' as 'center',
        ...style
      }}>

      <IconButton
        className='scroll-button__icon'
        width='3rem'
        name='keyboard_arrow_down'
        color={color}
        style={{
          paddingBottom: '1rem'
        }}
        onClick={() => {
          ref.current.scrollIntoView({
            behavior: 'smooth'
          })
        }} />

      <div
        className='scroll-button__scroll-ref'
        ref={ref}
        style={{
          position: 'absolute' as 'absolute',
          bottom: '0'
        }}></div>

    </div>
  )
}

if (process.env.NODE_ENV !== 'production') {
  ScrollButton.propTypes = {
    onClick: PropTypes.func,
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
    style: PropTypes.object
  }
}

export default ScrollButton
