import * as React from 'react'
import { FunctionComponent, ReactNode } from 'react'
import styles from './styles'
import concat from '../_utility/concat'
import Gutter from '../Gutter'

interface Props {
  children?: [ReactNode] | ReactNode
  className?: string
  onChange?: React.ChangeEventHandler
  background?: string
  color?: string
  thumbColor?: string
  style?: object
  min?: number
  max?: number
  value?: number
  label?: string
}

// I'm not sure if I want this to be a configurable prop
const borderColor = 'rgba(0,0,0, 0.20)'

const Range: FunctionComponent<Props> = ({
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
        width: '100%',
        background: 'none'
      }}
    />

  </div>

export default Range
