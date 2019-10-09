import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'
import concat from '../../utility/concat.js'
import { Button, Input } from '../'
import { Formik } from 'formik'

import schema from './schema.js'
import initialValues from './initialValues.js'

/**
* A simple dynamic form component
*/
const Form = ({
  className, children,
  background, color, style, buttonStyle, inputStyle,
  onSubmit, fields,
  labels, placeholders,
  submitButton, exposeSubmit
}) => {
  return (
    fields
      ? <div
        className={concat('form', className)}
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
            if (onSubmit) {
              onSubmit(
                values,
                () => {
                  setSubmitting(false)
                })
            }
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
          }) => {
            return (
              <form onSubmit={handleSubmit} className='form__form'>

                {children}

                {fields.map(field => {
                  const { name, type, placeholder, label } = field
                  return <div
                    key={`field_${name}`}
                    id="test"
                    className={`form__field_${name}`}>
                    {labels ? <label className='form__feild__label'>{ label || name.replace(/^./, name[0].toUpperCase()) }</label> : null}
                    <Input
                      name={name}
                      type={type || 'text'}
                      placeholder={ placeholders ? placeholder || name.replace(/^./, name[0].toUpperCase()) : null }
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values[name]}
                      error={errors[name] && touched[name] && errors[name]}
                      inputStyle={inputStyle}
                    />
                  </div>
                })}

                { submitButton || <Button
                  type='submit'
                  disabled={isSubmitting}
                  style={{
                    width: '100%',
                    ...buttonStyle
                  }}>
                      Submit
                </Button>
                }
              </form>
            )
          }}
        </Formik>
      </div> : null
  )
}

Form.propTypes = {
  /**
  * set parrent classname
  */
  className: PropTypes.string,
  /**
  * children appended to top of form before dynamic inputs
  * optional inputs or elements can be added to the form if need be
  */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  /**
  * background color
  **/
  background: PropTypes.string,
  /**
  * font color
  **/
  color: PropTypes.string,
  /**
  * style object can override parrent container styles
  **/
  style: PropTypes.object,
  /**
  * form submit event, returns values and callback. Callback sets the form back to submitting=false
  **/
  onSubmit: PropTypes.func,
  /**
  *
  **/
  fields: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    label: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    validation: PropTypes.string
  })),
  buttonStyle: PropTypes.object,
  inputStyle: PropTypes.object,
  /**
  * Enable labels
  **/
  labels: PropTypes.bool,
  /**
  * Enable placeholders
  **/
  placeholders: PropTypes.bool,
  /**
  * Replace default submit button, make sure to include type=submit on the button
  **/
  submitButton: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),

  exposeSubmit: PropTypes.func
}

export default Form
