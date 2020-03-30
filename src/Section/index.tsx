import * as React from 'react'
import { FunctionComponent, ReactNode } from 'react'
import styles from './styles'
import concat from '../_utility/concat'
import ScrollButton from '../ScrollButton'
import Center from '../Center'

interface Props {
  children?: [ReactNode] | ReactNode
  className?: string
  style?: object
  background?: string
  color?: string
  height?: number
  maxWidth?: string
}

/**
* fancy content section component to use with Hero
*/
const Section: FunctionComponent<Props> = ({
  className, children, style,
  background, color,
  height, maxWidth
}) =>

  <section
    className={concat('section', className)}
    style={{
      ...styles.container,
      ...style,
      ...(background ? { background: background } : null),
      ...(color ? { color: color } : null),
      ...(height ? {
        height,
        padding: 0,
        position: 'relative'
      } : null)
    }}>

    <Center style={{ left: 0 }} disabled={!height}>
      <div
        className='section__content'
        style={{
          ...styles.content,
          ...(maxWidth ? { maxWidth } : null)
        }}>

        {children}

      </div>
    </Center>

    { height
      ? <ScrollButton
        color={color}
        style = {{
          position: 'absolute' as 'absolute',
          bottom: 0
        }}/>
      : null }

  </section>

export default Section
