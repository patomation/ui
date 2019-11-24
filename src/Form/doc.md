## Form
A simple dynamic form component using Formik

### Props:

#### className
Exposes ability to set a custom class name
 - type: string

#### children
children appended to top of form before dynamic inputs
   optional inputs or elements can be added to the form if need be
 - type: union
   - type: array of node
   - type: node

#### background
background color
 - type: string

#### color
font color
 - type: string

#### style
style object can override parrent container styles
 - type: object

#### form submit event, returns values and callback. Callback sets the form back to submitting=false
  
  onSubmit
 - type: func

#### fields
 - type: arrayOf(PropTypes

#### label
 - type: string

#### type
 - type: string

#### placeholder
 - type: string

#### required
 - type: bool

#### validation
 - type: string

