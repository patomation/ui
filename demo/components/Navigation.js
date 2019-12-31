import React from 'react'
import { Grid, Brand, Hr, Button } from '../../src'
import { Link } from 'react-router-dom'

const Navigation = () =>
<Grid gap>
<Link to='/'><Brand> UI </Brand></Link>
<Hr/>
<div style={{color: 'gray'}}>General</div>
<Link to={'/Brand'} key={'navigation-link-Brand'}><Button kind='none'> Brand </Button></Link>
<Link to={'/Button'} key={'navigation-link-Button'}><Button kind='none'> Button </Button></Link>
<Link to={'/Icon'} key={'navigation-link-Icon'}><Button kind='none'> Icon </Button></Link>
<Link to={'/IconButton'} key={'navigation-link-IconButton'}><Button kind='none'> IconButton </Button></Link>
<Link to={'/Image'} key={'navigation-link-Image'}><Button kind='none'> Image </Button></Link>
<Link to={'/Heading'} key={'navigation-link-Heading'}><Button kind='none'> Heading </Button></Link>
<div style={{color: 'gray'}}>Layout</div>
<Link to={'/Grid'} key={'navigation-link-Grid'}><Button kind='none'> Grid </Button></Link>
<Link to={'/Page'} key={'navigation-link-Page'}><Button kind='none'> Page </Button></Link>
<Link to={'/Header'} key={'navigation-link-Header'}><Button kind='none'> Header </Button></Link>
<Link to={'/Hero'} key={'navigation-link-Hero'}><Button kind='none'> Hero </Button></Link>
<Link to={'/Footer'} key={'navigation-link-Footer'}><Button kind='none'> Footer </Button></Link>
<Link to={'/Nav'} key={'navigation-link-Nav'}><Button kind='none'> Nav </Button></Link>
<Link to={'/ImageGrid'} key={'navigation-link-ImageGrid'}><Button kind='none'> ImageGrid </Button></Link>
<div style={{color: 'gray'}}>Data Entry</div>
<Link to={'/Input'} key={'navigation-link-Input'}><Button kind='none'> Input </Button></Link>
<Link to={'/Select'} key={'navigation-link-Select'}><Button kind='none'> Select </Button></Link>
<Link to={'/Form'} key={'navigation-link-Form'}><Button kind='none'> Form </Button></Link>
<Link to={'/LoginForm'} key={'navigation-link-LoginForm'}><Button kind='none'> LoginForm </Button></Link>
<Link to={'/RegisterForm'} key={'navigation-link-RegisterForm'}><Button kind='none'> RegisterForm </Button></Link>
<div style={{color: 'gray'}}>Data Display</div>
<Link to={'/Badge'} key={'navigation-link-Badge'}><Button kind='none'> Badge </Button></Link>
<Link to={'/Card'} key={'navigation-link-Card'}><Button kind='none'> Card </Button></Link>
<Link to={'/Code'} key={'navigation-link-Code'}><Button kind='none'> Code </Button></Link>
<Link to={'/Collapse'} key={'navigation-link-Collapse'}><Button kind='none'> Collapse </Button></Link>
<Link to={'/Error'} key={'navigation-link-Error'}><Button kind='none'> Error </Button></Link>
<Link to={'/Table'} key={'navigation-link-Table'}><Button kind='none'> Table </Button></Link>
<Link to={'/Tabs'} key={'navigation-link-Tabs'}><Button kind='none'> Tabs </Button></Link>
<Link to={'/User'} key={'navigation-link-User'}><Button kind='none'> User </Button></Link>
<div style={{color: 'gray'}}>Feedback</div>
<Link to={'/Modal'} key={'navigation-link-Modal'}><Button kind='none'> Modal </Button></Link>
<Link to={'/Loader'} key={'navigation-link-Loader'}><Button kind='none'> Loader </Button></Link>
<Link to={'/Spinner'} key={'navigation-link-Spinner'}><Button kind='none'> Spinner </Button></Link>
<div style={{color: 'gray'}}>Building Blocks</div>
<Link to={'/Center'} key={'navigation-link-Center'}><Button kind='none'> Center </Button></Link>
<Link to={'/DragDrop'} key={'navigation-link-DragDrop'}><Button kind='none'> DragDrop </Button></Link>
<Link to={'/Clickable'} key={'navigation-link-Clickable'}><Button kind='none'> Clickable </Button></Link>
<Link to={'/Gutter'} key={'navigation-link-Gutter'}><Button kind='none'> Gutter </Button></Link>
<Link to={'/Hr'} key={'navigation-link-Hr'}><Button kind='none'> Hr </Button></Link>
<Link to={'/List'} key={'navigation-link-List'}><Button kind='none'> List </Button></Link>
<Link to={'/Panel'} key={'navigation-link-Panel'}><Button kind='none'> Panel </Button></Link>
<Link to={'/Placeholder'} key={'navigation-link-Placeholder'}><Button kind='none'> Placeholder </Button></Link>
<Link to={'/Row'} key={'navigation-link-Row'}><Button kind='none'> Row </Button></Link>
<Link to={'/ScrollButton'} key={'navigation-link-ScrollButton'}><Button kind='none'> ScrollButton </Button></Link>
<Link to={'/Shape'} key={'navigation-link-Shape'}><Button kind='none'> Shape </Button></Link>
<div style={{color: 'gray'}}>Tools</div>
<Link to={'/Breakpoints'} key={'navigation-link-Breakpoints'}><Button kind='none'> Breakpoints </Button></Link>
<Link to={'/Device'} key={'navigation-link-Device'}><Button kind='none'> Device </Button></Link>
<div style={{color: 'gray'}}>Other</div>
<Link to={'/Calendar'} key={'navigation-link-Calendar'}><Button kind='none'> Calendar </Button></Link>
<Link to={'/Carousel'} key={'navigation-link-Carousel'}><Button kind='none'> Carousel </Button></Link>
<div style={{color: 'gray'}}>Depricated</div>
<Link to={'/Content'} key={'navigation-link-Content'}><Button kind='none'> Content </Button></Link>
<Link to={'/SideBar'} key={'navigation-link-SideBar'}><Button kind='none'> SideBar </Button></Link>
<Link to={'/Link'} key={'navigation-link-Link'}><Button kind='none'> Link </Button></Link>
<Link to={'/Section'} key={'navigation-link-Section'}><Button kind='none'> Section </Button></Link>

</Grid>

export default Navigation
