import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'
import concat from '../_utility/concat.js'
import { Error, Gutter } from '../'
/**
* A standardized imput component plus textarea
*/
const Input = ({
  type, name, onChange, onFocus, onBlur, value, error, placeholder,
  className, onClick, background, color,
  containerStyle, inputStyle, inputErrorStyle, errorStyle, style,
  textAlign,
  rows = 3, cols,
  label, min, max
}) => {
  const InputType = type === 'textarea' ? 'textarea' : 'input'

  return (
    <div
      className={concat('input', className)}
      style={{
        ...styles.container,
        ...style,
        ...containerStyle
      }}>

      { label
        ? <>
          <label className='input__label'> {label} </label>
          <Gutter half />
        </>
        : null }

      <InputType
        className='input__input'
        type={type}
        name={name}
        rows={rows} // textarea
        cols={cols} // textarea
        min={min}
        max={max}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder={placeholder}
        value={value}
        onClick={onClick}
        style={{
          ...styles.input,
          ...(type === 'textarea' ? styles.textarea : null),
          ...(background ? { background: background } : null),
          ...(color ? { color: color } : null),
          textAlign,
          ...inputStyle,
          ...(error ? (inputErrorStyle || styles.errorBorder) : null),
          ...(type === 'textarea' ? { height: 'auto' } : null)
        }}/>

      { typeof error === 'string'
        ? <Error
          className='input__error'
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

Input.propTypes = {
  /**
  * Exposes ability to set a custom class name
  **/
  type: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  placeholder: PropTypes.string,
  className: PropTypes.string,
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
  inputStyle: PropTypes.object,
  inputErrorStyle: PropTypes.object,
  errorStyle: PropTypes.object,
  style: PropTypes.object,
  label: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  textAlign: PropTypes.string,
  cols: PropTypes.number,
  rows: PropTypes.number
}

export default Input
