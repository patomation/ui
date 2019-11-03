import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'
import concat from '../_utility/concat.js'
import { Formik } from 'formik'
import validationSchema from './validationSchema.js'
import { Button, Input, Grid } from '../'

const RegisterForm = ({
  className, background, color, style,
  onSubmit
}) => {
  return (
    <div
      className={concat('register-form', className)}
      style={{
        ...styles.container,
        ...(background ? { background: background } : null),
        ...(color ? { color: color } : null),
        ...style
      }}>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          email2: '',
          password: '',
          password2: ''
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          onSubmit(
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
            <Grid gap='1rem'>
              <Input
                type="text"
                name="firstName"
                placeholder="first name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}
                error={errors.firstName && touched.firstName && errors.firstName}
              />
              <Input
                type="text"
                name="lastName"
                placeholder="last name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastName}
                error={errors.lastName && touched.lastName && errors.lastName}
              />
              <Input
                type="email"
                name="email"
                placeholder="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                error={errors.email && touched.email && errors.email}
              />

              <Input
                type="email"
                name="email2"
                placeholder="verify email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email2}
                error={errors.email2 && touched.email2 && errors.email2}
              />

              <Input
                type="password"
                name="password"
                placeholder="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                error={errors.password && touched.password && errors.password}
              />

              <Input
                type="password"
                name="password2"
                placeholder="verify password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password2}
                error={errors.password2 && touched.password2 && errors.password2}
              />

              <Button
                type="submit"
                disabled={isSubmitting}
                style={{
                  width: '100%'
                }}>
                Submit
              </Button>
            </Grid>
          </form>
        )}
      </Formik>
    </div>
  )
}

RegisterForm.propTypes = {
  className: PropTypes.string,
  background: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object,
  onSubmit: PropTypes.func
}

export default RegisterForm
