import * as Yup from 'yup'

export default (fields) => {
  const shape = fields.reduce((acc, field) => {
    const { name, required, validation } = field
    acc[name] = Yup.string()
    if (required) {
      acc[name] = Yup.string()
        .required('Required')
    }
    if (validation === 'email') {
      acc[name] = Yup.string()
        .email('Must be valid email')
        .required('Required')
    }
    return acc
  }, {})
  console.log(shape)
  return Yup.object().shape(shape)
}
