## Loader
a loading component with loading bar and spinner

### Props:

#### className
Exposes ability to set a custom class name
 - type: string

#### children
 - type: union
   - type: array of node
   - type: node

#### onClick
 - type: func

#### background
 - type: string

#### color
 - type: string

#### style
 - type: object

#### message
 - type: string

#### spinner
 - type: bool
 - default: true

#### progressBar
 - type: bool

#### progressBarColor
 - type: string

#### progressBarTime
 - type: number
 - default: 1000

#### Make progress bar finish quickly if were done with it.
  
  complete
 - type: bool

#### onComplete
 - type: func

