import * as React from 'react'
import styles from './styles'
import config from '../config'
import mediaQuery from '../_utility/mediaQuery'

const Breakpoints = () => {
  const { sm, md, lg, xl, xxl } = config.size.media

  return (<>
    <style>
      {mediaQuery({
        max: sm,
        css: {
          '.breakpoint-tool-xs': {
            background: 'fuchsia'
          }
        }
      })}
      {mediaQuery({
        min: sm,
        max: md,
        css: {
          '.breakpoint-tool-sm': {
            background: 'fuchsia'
          }
        }
      })}
      {mediaQuery({
        min: md,
        max: lg,
        css: {
          '.breakpoint-tool-md': {
            background: 'fuchsia'
          }
        }
      })}
      {mediaQuery({
        min: lg,
        max: xl,
        css: {
          '.breakpoint-tool-lg': {
            background: 'fuchsia'
          }
        }
      })}
      {mediaQuery({
        min: xl,
        max: xxl,
        css: {
          '.breakpoint-tool-xl': {
            background: 'fuchsia'
          }
        }
      })}
      {mediaQuery({
        min: xxl,
        css: {
          '.breakpoint-tool-xxl': {
            background: 'fuchsia'
          }
        }
      })}

    </style>
    <div
      className={'break-points-tool'}
      style={{
        ...styles.container
      }}>

  Breakpoints
      <span className='breakpoint-tool-xs'>xs</span>
      <span className='breakpoint-tool-sm'>sm</span>
      <span className='breakpoint-tool-md'>md</span>
      <span className='breakpoint-tool-lg'>lg</span>
      <span className='breakpoint-tool-xl'>xl</span>
      <span className='breakpoint-tool-xxl'>xxl</span>
    </div>
  </>
  )
}

export default Breakpoints
