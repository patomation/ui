import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'

const Input = ({
  type, name, onChange, onBlur, value, error, placeholder,
  className, onClick, background, color,
  containerStyle, inputStyle, inputErrorStyle, errorStyle, style
}) => {
  return (
    <div
      className={className}
      style={{
        ...styles.container,
        ...style,
        ...containerStyle
      }}>

      <input
        type={type}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        value={value}
        onClick={onClick}
        style={{
          ...styles.input,
          ...(background ? { background: background } : null),
          ...(color ? { color: color } : null),
          ...inputStyle,
          ...(error ? (inputErrorStyle || styles.inputError) : null)
        }}/>

      <div
        style={{
          ...(error ? styles.error : null),
          ...(error ? errorStyle : null)
        }}>

        {error}

      </div>

    </div>
  )
}

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  value: PropTypes.string,
  error: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  background: PropTypes.string,
  color: PropTypes.string,
  containerStyle: PropTypes.object,
  inputStyle: PropTypes.object,
  inputErrorStyle: PropTypes.object,
  errorStyle: PropTypes.object,
  style: PropTypes.object
}

export default Input
