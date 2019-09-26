import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'
import { Formik } from 'formik'
import Button from '../Button'
import Input from '../Input'
import Gutter from '../Gutter'

import schema from './schema.js'
import initialValues from './initialValues.js'

const Form = ({
  className,
  background, color, style,
  onSubmit, fields

}) => {
  return (
    fields ?
    <div
      className={className}
      style={{
        ...styles.container,
        ...(background ? { background: background } : null),
        ...(color ? { color: color } : null),
        ...style
      }}>
      <Formik
        initialValues={initialValues(fields)}
        validationSchema={schema(fields)}
        onSubmit={(values, { setSubmitting }) => {
          if(onSubmit) onSubmit(
            values,
            () => {
              setSubmitting(false)
            })
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>

            {fields.map( field => {
              const { name, type, placeholder } = field
              return <span key={`field_${name}`}>
                <Input
                  name={name}
                  type={type || 'text'}
                  placeholder={placeholder || name.replace(/^./, name[0].toUpperCase())}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values[name]}
                  error={errors[name] && touched[name] && errors[name]}
                />
                <Gutter disabled={(errors[name] && touched[name] && errors[name]) !== undefined}/>
              </span>
            })}

            <Button
              type='submit'
              disabled={isSubmitting}
              style={{
                width: '100%'
              }}>
              Submit
            </Button>
          </form>
        )}
      </Formik>
    </div> : null
  )
}

Form.propTypes = {
  className: PropTypes.string,
  background: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object,
  onSubmit: PropTypes.func,
  fields: PropTypes.arrayOf({
    name: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    validation: PropTypes.string
  })
}

export default Form
