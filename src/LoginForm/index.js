import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'
import concat from '../_utility/concat.js'
import { Formik } from 'formik'
import validationSchema from './validationSchema.js'
import { Button, Input, Grid, Error } from '../'

const LoginForm = ({
  className, background, color, style,
  onSubmit, error
}) => {
  return (
    <div
      className={concat('login-form', className)}
      style={{
        ...styles.container,
        ...(background ? { background: background } : null),
        ...(color ? { color: color } : null),
        ...style
      }}>
      <Formik
        initialValues={{ email: 'email@gmail.com', password: 'password' }}
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
                type="email"
                name="email"
                placeholder="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                error={errors.email && touched.email && errors.email}
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

              <Button
                type="submit"
                disabled={isSubmitting}
                style={{
                  width: '100%'
                }}>
                Submit
              </Button>

              { error ? <Error>{error}</Error> : null }

            </Grid>
          </form>
        )}
      </Formik>
    </div>
  )
}

LoginForm.propTypes = {
  className: PropTypes.string,
  background: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object,
  onSubmit: PropTypes.func,
  /**
  * Setting the error message from the outside if api error
  **/
  error: PropTypes.string
}

export default LoginForm
