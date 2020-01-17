import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'
import concat from '../_utility/concat'
import { Gutter } from '../'

// I'm not sure if I want this to be a configurable prop
const borderColor = 'rgba(0,0,0, 0.20)'

const Range = ({
  className,
  background = '#ffffff', thumbColor = 'silver', color, style,
  min = '1',
  max = '100',
  value, onChange,
  label
}) =>

  <div
    className={concat('range', className)}
    style={{
      ...styles.container,
      ...(color ? { color: color } : null),
      ...style
    }}>

    <style>{`
      input[type=range] {
        -webkit-appearance: none;
        margin: 13px 0;
        width: 100%;
      }
      input[type=range]:focus {
        outline: none;
      }
      input[type=range]::-webkit-slider-runnable-track {
        width: 100%;
        height: 8.4px;
        cursor: pointer;
        animate: 0.2s;
        background: ${background};
        border-radius: 1.3px;
        border: 1px solid ${borderColor};
      }
      input[type=range]::-webkit-slider-thumb {
        box-shadow: 1px 1px 1px ${borderColor}, 0px 0px 1px ${borderColor};
        border: 1px solid 1px solid ${borderColor};
        height: 36px;
        width: 16px;
        border-radius: 3px;
        background: ${thumbColor};
        cursor: pointer;
        -webkit-appearance: none;
        margin-top: -14px;
      }
      input[type=range]:focus::-webkit-slider-runnable-track {
        background: ${background};
      }
      input[type=range]::-moz-range-track {
        width: 100%;
        height: 8.4px;
        cursor: pointer;
        animate: 0.2s;
        background: ${background};
        border-radius: 1.3px;
        border: 1px solid ${borderColor};
      }
      input[type=range]::-moz-range-thumb {
        box-shadow: 1px 1px 1px ${borderColor}, 0px 0px 1px ${borderColor};
        border: 1px solid 1px solid ${borderColor};
        height: 36px;
        width: 16px;
        border-radius: 3px;
        background: ${thumbColor};
        cursor: pointer;
      }
      input[type=range]::-ms-track {
        width: 100%;
        height: 8.4px;
        cursor: pointer;
        animate: 0.2s;
        background: transparent;
        border-color: transparent;
        border-width: 16px 0;
        color: transparent;
      }
      input[type=range]::-ms-fill-lower {
        background: ${background};
        border: 1px solid ${borderColor};
        border-radius: 2.6px;
      }
      input[type=range]::-ms-fill-upper {
        background: ${background};
        border: 1px solid ${borderColor};
        border-radius: 2.6px;
      }
      input[type=range]::-ms-thumb {
        box-shadow: 1px 1px 1px ${borderColor}, 0px 0px 1px ${borderColor};
        border: 1px solid 1px solid ${borderColor};
        height: 36px;
        width: 16px;
        border-radius: 3px;
        background: ${thumbColor};
        cursor: pointer;
      }
      input[type=range]:focus::-ms-fill-lower {
        background: ${background};
      }
      input[type=range]:focus::-ms-fill-upper {
        background: ${background};
      }

    `}</style>

    { label
      ? <>
        <label className='input__label'> {label} </label>
        <Gutter half />
      </>
      : null }

    <input
      type="range"
      min={min}
      max={max}
      value={value}
      onChange={onChange}
      style={{
        width: '100%'
      }}
    />

  </div>

if (process.env.NODE_ENV !== 'production') {
  Range.propTypes = {
    className: PropTypes.string,
    /**
  * Individual component or set of components accepted as children
  **/
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    /**
  * Callback for when the range slider value changes. returns event. look for event.target.value to get the new value
  **/
    onChange: PropTypes.func,
    /**
  * The background color of component
  **/
    background: PropTypes.string,
    /**
  * The text color of component
  **/
    color: PropTypes.string,
    /**
  * The color of the thumb drag slider
  **/
    thumbColor: PropTypes.string,
    /**
  * Set any styles of the top level element of the component
  **/
    style: PropTypes.object,
    /**
  * Minimum number range
  **/
    min: PropTypes.number,
    /**
  * Maximum number range
  **/
    max: PropTypes.number,
    /**
  * Range slider value
  **/
    value: PropTypes.number,
    label: PropTypes.string
  }
}
export default Range
