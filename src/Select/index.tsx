import * as React from 'react'
import { FunctionComponent, ReactNode } from 'react'
import styles from './styles'
import concat from '../_utility/concat'

import Error from '../Error'

interface Props {
  children?: [ReactNode] | ReactNode
  className?: string
  name?: string
  onChange?: React.ChangeEventHandler
  onBlur?: () => void
  value?: string | number
  error?: string | boolean
  placeholder?: string
  onClick?: (MouseEvent) => {}
  background?: string
  color?: string
  containerStyle?: object
  selectStyle?: object
  selectErrorStyle?: object
  errorStyle?: object
  style?: object
  label?: string
  optionStyle?: object
  options?: any[]
}

/**
* a standardized dropdown component for using with forms
*/
const Select: FunctionComponent<Props> = ({
  name, onChange, onBlur, value, error, placeholder,
  className, onClick, background, color,
  containerStyle, selectStyle, optionStyle, selectErrorStyle, errorStyle, style,
  label,
  options
}) => {
  return (
    <div
      className={concat('select', className)}
      style={{
        ...styles.container,
        ...style,
        ...containerStyle
      }}>

      <style>
        {`
        select:-moz-focusring {
          color: transparent;
          text-shadow: 0 0 0 #000;
        }
        select {
            background: transparent;
        }
      `}
      </style>

      { label ? <label className='select__label'>{label}</label> : null }

      <span style={{
        ...styles.border,
        ...(error ? (selectErrorStyle || styles.errorBorder) : null)
      }}>
        <select
          className='select__select'
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          // placeholder={placeholder} //todo
          value={value}
          onClick={onClick}
          style={{
            ...styles.select,
            ...(background ? { background: background } : null),
            ...(color ? { color: color } : null),
            ...selectStyle
          }}>

          { options
            ? Object.entries(options).map(([value, label]) =>
              <option
                key={`option_${value}`}
                value={value}
                style={{
                  ...styles.option,
                  ...optionStyle
                }}>

                {label}

              </option>
            ) : null }

        </select>
      </span>

      { typeof error === 'string'
        ? <Error
          className='select__error'
          style={{
            ...styles.error,
            ...errorStyle
          }}>

          {error}

        </Error>
        : null }

    </div>
  )
}

export default Select
