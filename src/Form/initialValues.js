export default (fields) => {
  const values = fields.reduce( (acc, field) => {
    const { name, value } = field
    acc[name] = value || '' //Use blank string if no initial value is defined
    return acc
  }, {})
  console.log(values);
  return values
}
