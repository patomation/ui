import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'
import concat from '../_utility/concat.js'
import { Error } from '../'
/**
* a standardized dropdown component for using with forms
*/
const Select = ({
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

          {Object.entries(options).map(([value, label]) =>
            <option
              key={`option_${value}`}
              value={value}
              style={{
                ...styles.option,
                ...optionStyle
              }}
            >
              {label}
            </option>
          )}

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

Select.propTypes = {
  /**
  * Exposes ability to set a custom class name
  **/
  className: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  placeholder: PropTypes.string,
  onClick: PropTypes.func,
  /**
  * The background color of component
  **/
  background: PropTypes.string,
  /**
  * The text color of component
  **/
  color: PropTypes.string,
  containerStyle: PropTypes.object,
  selectStyle: PropTypes.object,
  selectErrorStyle: PropTypes.object,
  errorStyle: PropTypes.object,
  /**
  * Set any styles of the top level element of the component
  **/
  style: PropTypes.object,
  label: PropTypes.string,
  optionStyle: PropTypes.object,
  options: PropTypes.array
}

export default Select
