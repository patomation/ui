import * as React from 'react'
import * as PropTypes from 'prop-types'
import { FunctionComponent, InputHTMLAttributes } from 'react'
import styles from './styles'
import concat from '../_utility/concat'
import Error from '../Error'
import Gutter from '../Gutter'

interface Props {
  type?: string
  name?: string
  onChange?: InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>['onChange']
  onFocus?: () => void
  onBlur?: () => void
  value?: string | number
  error?: string | boolean
  placeholder?: string
  className?: string
  onClick?: (MouseEvent) => void
  background?: string
  color?: string
  containerStyle?: object
  inputStyle?: object
  inputErrorStyle?: object
  errorStyle?: object
  style?: object
  label?: string
  min?: number
  max?: number
  step?: number
  textAlign?: 'center' | 'left' | '-moz-initial' | 'inherit' | 'initial' | 'revert' | 'unset' | 'right' | 'end' | 'justify' | 'match-parent' | 'start' | undefined
  cols?: number
  rows?: number
  prefix?: string
  suffix?: string
}

/**
* A standardized input component plus textarea
*/
const Input: FunctionComponent<Props> = ({
  type, name, onChange, onFocus, onBlur, value, error, placeholder,
  className, onClick, background, color,
  containerStyle, inputStyle, inputErrorStyle, errorStyle, style,
  textAlign,
  rows = 3, cols,
  label, min, max, step,
  prefix, suffix
}) => {
  const InputType = type === 'textarea' ? 'textarea' : 'input'

  return (
    <div
      className={concat('input', className)}
      style={{
        ...styles.container,
        position: 'relative',
        ...style,
        ...containerStyle
      }}>

      { label
        ? <>
          <label className='input__label'> {label} </label>
          <Gutter half />
        </>
        : null }

      { prefix
        ? <span
          style={{
            position: 'absolute',
            bottom: '0.75rem',
            left: '0.75rem'
          }}>
          {prefix}
        </span>
        : null
      }

      <InputType
        className='input__input'
        type={type}
        name={name}
        rows={rows} // textarea
        cols={cols} // textarea
        min={min}
        max={max}
        step={step}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder={placeholder}
        value={value}
        onClick={onClick}
        style={{
          ...styles.input,
          ...(prefix ? {
            paddingLeft: '2rem'
          } : null),
          ...(type === 'textarea' ? {
            textAlign: 'left' as 'left',
            resize: 'none',
            padding: '1rem'
          } : null),
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

if (process.env.NODE_ENV !== 'production') {
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
    // textAlign: PropTypes.string,
    cols: PropTypes.number,
    rows: PropTypes.number
  }
}
export default Input
