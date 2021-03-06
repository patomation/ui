import * as React from 'react'
import { useState, useEffect, FunctionComponent, ReactNode } from 'react'
import styles from './styles'
import concat from '../_utility/concat'

import Center from '../Center'
import Spinner from '../Spinner'
import Gutter from '../Gutter'

interface Props {
  children?: [ReactNode] | ReactNode
  className?: string
  onClick?: (MouseEvent) => {}
  background?: string
  color?: string
  style?: object
  message?: string
  spinner?: boolean
  progressBar?: boolean
  progressBarColor?: string
  progressBarTime?: number
  complete?: boolean
  onComplete?: () => void
}

/**
* a loading component with loading bar and spinner
*/
const Loader: FunctionComponent<Props> = ({
  className, children,
  background, color, style,
  message, spinner = true,
  progressBar, progressBarColor, progressBarTime = 1000,
  complete,
  onComplete
}) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prevProgress => {
        if (prevProgress > 100) { // Stop interval when progress reaches 100%
          clearInterval(interval)
          if (onComplete) onComplete()
        }
        return prevProgress + (complete ? 1 : 0.25) // Smother than 1% per tick
      })
    }, complete ? 1 : progressBarTime / 100)

    return () => {
      clearInterval(interval)
    }
  }, [complete, progressBarTime, onComplete])

  return (
    <Center
      className={concat('loader', className)}
      style={{
        ...styles.container,
        ...(background ? { background: background } : null),
        ...(color ? { color: color } : null),
        textAlign: 'center' as 'center',
        ...style
      }}>
      { message
        ? <h2>
          {message}
          <Gutter/>
        </h2>
        : null }

      { spinner
        ? <Spinner color={color} style={{ display: 'block' }}/>
        : null }

      { progressBar
        ? <div
          className='loader__progress__container'
          style={{
            ...styles.progressBarContainer
          }}>
          <div
            className='loader__progress__bar'
            style={{
              ...styles.progressBar,
              background: progressBarColor,
              width: `${progress}%`
            }}></div>
        </div>
        : null}

    </Center>
  )
}

export default Loader
