import * as React from 'react'
import { FunctionComponent, InputHTMLAttributes } from 'react'
import styles from './styles'
import concat from '../_utility/concat'
import Error from '../Error'
import Gutter from '../Gutter'

interface Props {
  name?: string
  onChange?: InputHTMLAttributes<HTMLTextAreaElement>['onChange']
  onFocus?: () => void
  onBlur?: () => void
  value?: string | number
  defaultValue?: string | number
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
  disabled?: boolean
}

/**
* A standardized input component plus textarea
*/
const Input: FunctionComponent<Props> = ({
  name, onChange, onFocus, onBlur, value, defaultValue, error, placeholder,
  className, onClick, background, color,
  containerStyle, inputStyle, inputErrorStyle, errorStyle, style,
  textAlign,
  rows = 3, cols,
  label, min, max, step,
  disabled
}) => {
  return (
    <div
      className={concat('text-area', className)}
      style={{
        ...styles.container,
        position: 'relative',
        ...style,
        ...containerStyle
      }}>

      { label
        ? <>
          <label className='text-area__label'> {label} </label>
          <Gutter half />
        </>
        : null }

      <textarea
        className='textarea__input'
        name={name}
        rows={rows} // textarea
        cols={cols} // textarea
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
        onClick={onClick}
        style={{
          ...styles.input,
          textAlign: textAlign || 'left' as 'left',
          resize: 'none',
          padding: '1rem',
          ...(background ? { background: background } : null),
          ...(color ? { color: color } : null),
          ...inputStyle,
          ...(error ? (inputErrorStyle || styles.errorBorder) : null),
          height: 'auto'
        }}
        disabled={disabled}/>

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

export default Input
