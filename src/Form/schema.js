import * as Yup from 'yup'

function equalTo (ref, msg) {
  return this.test({
    name: 'equalTo',
    exclusive: false,
    message: msg || '${path} must be the same as ${reference}',
    params: {
      reference: ref.path
    },
    test: function (value) {
      return value === this.resolve(ref)
    }
  })
}
Yup.addMethod(Yup.string, 'equalTo', equalTo)

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export default (fields) => {
  const shape = fields.reduce((acc, field) => {
    const { name, required, validation } = field
    acc[name] = Yup.string()
    if (required) {
      acc[name] = Yup.string()
        .required('Required')
    }
    if (validation === 'phone') {
      acc[name] = Yup.string()
        .matches(phoneRegExp, 'Phone number is not valid')
        .required('Required')
    }
    if (validation === 'email') {
      acc[name] = Yup.string()
        .email('Must be valid email')
        .required('Required')
    }
    if (validation === 'matches-email') {
      acc[name] = Yup.string()
        .equalTo(Yup.ref('email'), 'Email must match')
        .required('Required')
    }
    return acc
  }, {})
  return Yup.object().shape(shape)
}
