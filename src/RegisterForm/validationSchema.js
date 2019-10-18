import * as Yup from 'yup'

function equalTo (ref, msg) {
  return this.test({
    name: 'equalTo',
    exclusive: false,
    message: msg || '${path} must be the same as ${reference}', /* eslint-disable-line */
    params: {
      reference: ref.path
    },
    test: function (value) {
      return value === this.resolve(ref)
    }
  })
}
Yup.addMethod(Yup.string, 'equalTo', equalTo)

export default Yup.object().shape({
  email: Yup.string()
    .email('Must be valid email')
    .required('Required'),
  email2: Yup.string()
    .equalTo(Yup.ref('email'), 'Email must match')
    .required('Required'),
  password: Yup.string()
    .required('Required'),
  password2: Yup.string()
    .equalTo(Yup.ref('password'), 'Passwords Must Match')
    .required('Required'),
  firstName: Yup.string()
    .required('Required'),
  lastName: Yup.string()
    .required('Required')

})
