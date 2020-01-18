import * as React from 'react'
import { useState, useEffect } from 'react'
import * as PropTypes from 'prop-types'
import styles from './styles'
import concat from '../_utility/concat'

import Center from '../Center'
import Spinner from '../Spinner'
import Gutter from '../Gutter'

/**
* a loading component with loading bar and spinner
*/
const Loader = ({
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

if (process.env.NODE_ENV !== 'production') {
  Loader.propTypes = {
    /**
    * Exposes ability to set a custom class name
    **/
    className: PropTypes.string,
    /**
    * Individual component or set of components accepted as children
    **/
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
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
}

export default Loader
