import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'
import { config } from '../'
import mediaQuery from '../../utility/mediaQuery.js'

// Extract number and unit
const extract = (string) => {
  const number = string.match(/\d+/)[0]
  const unit = string.replace(number, '')
  return {
    number,
    unit
  }
}


const Breakpoints = ({
  className, children,
  onClick,
  background, color, style
}) => {

const { xs, sm, md, lg, xl, xxl } = config.size.media

return ( <>
<style>
  {mediaQuery({max:sm,css:{
    '.breakpoint-tool-xs':{
      background: 'fuchsia'
    }
  }})}
  {mediaQuery({min:sm, max:md, css:{
    '.breakpoint-tool-sm':{
      background: 'fuchsia'
    }
  }})}
  {mediaQuery({min:md, max:lg, css:{
    '.breakpoint-tool-md':{
      background: 'fuchsia'
    }
  }})}
  {mediaQuery({min:lg, max:xl, css:{
    '.breakpoint-tool-lg':{
      background: 'fuchsia'
    }
  }})}
  {mediaQuery({min:xl, max:xxl, css:{
    '.breakpoint-tool-xl':{
      background: 'fuchsia'
    }
  }})}
  {mediaQuery({min:xxl, css:{
    '.breakpoint-tool-xxl':{
      background: 'fuchsia'
    }
  }})}

</style>
<div
  onClick={onClick}
  className={'break-points-tool'}
  style={{
    ...styles.container,
    ...( background ? { background: background } : null ),
    ...( color ? { color: color } : null ),
    ...style
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
)}

Breakpoints.propTypes = {
  onClick: PropTypes.func,
  background: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object
}


export default Breakpoints
