import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'
import concat from '../_utility/concat.js'
import { Error } from '../'
/**
* A standardized imput component plus textarea
*/
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

      <span style={{
        ...styles.border,
        ...(error ? (inputErrorStyle || styles.errorBorder) : null),
        ...(type === 'textarea' ? { height: '6rem' } : null)
      }}>
        <InputType
          className='input__input'
          type={type}
          name={name}
          rows={10} // Todo look into if we need this anymore or should it be textarea ? rows
          min={min}
          max={max}
          onChange={onChange}
          // onChange={ e => {
          //   //Convert strings to numbers
          //   // onChange(e)
          //   const newevent = {
          //     ...e,
          //     ...{
          //       target: {
          //         value: isNaN(e.target.value)
          //           ? e.target.value // If Not a Number use uneffected value
          //           : parseInt(e.target.value) //If number convert string to number
          //       }
          //     }
          //   }
          //   console.log(e);
          //   console.log(newevent);
          // }}
          onBlur={onBlur}
          placeholder={placeholder}
          value={value}
          onClick={onClick}
          style={{
            ...styles.input,
            ...(type === 'textarea' ? styles.textarea : null),
            ...(background ? { background: background } : null),
            ...(color ? { color: color } : null),
            ...inputStyle
          }}/>
      </span>

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
