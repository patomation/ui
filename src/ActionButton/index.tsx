import * as React from 'react'
import { useState, FunctionComponent, ReactNode } from 'react'
import styles from './styles'

import Clickable from '../Clickable'
import Center from '../Center'
import Shape from '../Shape'
import { Add } from '../icons/index'
import posed from 'react-pose'

interface Props {
  onClick?: () => {} | undefined
  background?: string
  color?: string
  style?: object
  icon?: ReactNode
  width?: string
}

const PosedDiv = posed.div({
  hover: {
    transform: 'scale(1.1)',
    transition: { type: 'spring', stiffness: 100 }
  },
  nohover: {
    transform: 'scale(1)',
    transition: { type: 'spring', stiffness: 100 }
  }
})

/**
* an action button for the lower right hand corner that you can assign stuff to do things
**/
const ActionButton: FunctionComponent<Props> = ({
  onClick,
  background, color, style,
  icon, width = '3rem'
}: Props) => {
  const [hover, setHover] = useState<boolean>(false)

  return (
    <Clickable
      className={'action-button'}
      onClick={onClick}
      style={{
        ...styles.container,
        width,
        position: 'absolute' as 'absolute',
        bottom: '1rem',
        right: '1rem',
        ...style
      }}>
      <PosedDiv
        pose={ hover ? 'hover' : 'nohover' }
        onMouseEnter={() => {
          setHover(true)
        }}
        onMouseLeave={() => {
          setHover(false)
        }}>
        <Shape
          className={'action-button__circle'}
          circle
          innerStyle={{
            ...(background ? { background: background } : null),
            boxShadow: '0 1px 0.2rem rgba(0,0,0,0.25)'
          }}>
          <Center
            className={'action-button__center'}
            style={{
              textAlign: 'center' as 'center'
            }}>

            { icon !== undefined
              // use Provided icon
              ? icon
              // Use default icon
              : <Add
                className={'action-button__icon'}
                color={color}
                responsive />
            }

          </Center>
        </Shape>
      </PosedDiv>
    </Clickable>
  )
}

export default ActionButton
