import React from 'react'
import styles from './styles.js'

export default (props) => {

  const {
    type, name, onChange, onBlur, value, error, placeholder,
    className, onClick, background, color,
    containerStyle, inputStyle, inputErrorStyle, errorStyle, style
  } = props



  return(
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
          ...( background ? { background: background } : null ),
          ...( color ? { color: color } : null ),
          ...inputStyle,
          ...( error ? (inputErrorStyle || styles.inputError) : null )
        }}/>

        <div
          style={{
            ...( error ? styles.error : null ),
            ...( error ? errorStyle : null )
          }}>

          {error}

        </div>


      </div>
    )
}
