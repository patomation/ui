import React from 'react';
import styles from './styles.js'
import { Formik } from 'formik';
import validationSchema from './validationSchema.js';
import Button from '../Button';
import Input from '../Input';
import Gutter from '../Gutter';
export default (props) => {

  const {
    className, background, color, style,
    onSubmit
  } = props;

  return(
    <div
      className={className}
      style={{
        ...styles.container,
        ...( background ? { background: background } : null ),
        ...( color ? { color: color } : null ),
        ...style
      }}>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          onSubmit(
            values,
            () => {
              setSubmitting(false);
            });
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>

            <Input
              type="email"
              name="email"
              placeholder="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              error={errors.email && touched.email && errors.email}
            />

            <Gutter disabled={(errors.password && touched.password && errors.password) !== undefined}/>

            <Input
              type="password"
              name="password"
              placeholder="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              error={errors.password && touched.password && errors.password}
            />

            <Gutter disabled={(errors.password && touched.password && errors.password) !== undefined}/>

            <Button
              type="submit"
              disabled={isSubmitting}
              style={{
                width: '100%'
              }}>
              Submit
            </Button>
          </form>
        )}
      </Formik>
    </div>
  )
}
