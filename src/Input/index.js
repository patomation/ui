import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'
import concat from '../../utility/concat.js'

const Input = ({
  type, name, onChange, onBlur, value, error, placeholder,
  className, onClick, background, color,
  containerStyle, inputStyle, inputErrorStyle, errorStyle, style,
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

      { label ? <label className='input__label'>{label}</label> : null }

      <InputType
        className='input__input'
        type={type}
        name={name}
        cols="10" // Todo look into if we need this anymore or should it be textarea ? rows
        min={min}
        max={max}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        value={value}
        onClick={onClick}
        style={{
          ...styles.input,
          ...(type === 'textarea' ? styles.textarea : null),
          ...(background ? { background: background } : null),
          ...(color ? { color: color } : null),
          ...inputStyle,
          ...(error ? (inputErrorStyle || styles.inputError) : null)
        }}/>

      { typeof error === 'string'
        ? <div
          className='input__error'
          style={{
            ...styles.error,
            ...errorStyle
          }}>
          {error}
        </div>
        : null }

    </div>
  )
}

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  placeholder: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  background: PropTypes.string,
  color: PropTypes.string,
  containerStyle: PropTypes.object,
  inputStyle: PropTypes.object,
  inputErrorStyle: PropTypes.object,
  errorStyle: PropTypes.object,
  style: PropTypes.object,
  label: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number
}

export default Input
