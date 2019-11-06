import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'
import concat from '../_utility/concat.js'
import { Center, Spinner, Gutter } from '../'

const Loader = ({
  className, children,
  background, color, style,
  message, spinner,
  progressBar, progressBarColor, progressBarTime,
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
        textAlign: 'center',
        ...style
      }}>
      { message
        ? <h2>
          {message}
          <Gutter/>
        </h2>
        : null }

      { spinner
        ? <Spinner color={color}/>
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

Loader.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  onClick: PropTypes.func,
  background: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object,
  message: PropTypes.string,
  spinner: PropTypes.bool,
  progressBar: PropTypes.bool,
  progressBarColor: PropTypes.string,
  progressBarTime: PropTypes.number,
  /*
  * Make progress bar finish quickly if were done with it.
  */
  complete: PropTypes.bool,
  onComplete: PropTypes.func
}

Loader.defaultProps = {
  spinner: true,
  progressBarTime: 1000
}

export default Loader
