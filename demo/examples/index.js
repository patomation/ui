 import React from 'react'
import { Route } from 'react-router-dom'
import Badge from './Badge'
import Brand from './Brand'
import Breakpoints from './Breakpoints'
import Button from './Button'
import Calendar from './Calendar'
import Card from './Card'
import Carousel from './Carousel'
import Center from './Center'
import Clickable from './Clickable'
import Code from './Code'
import Collapse from './Collapse'
import Content from './Content'
import Device from './Device'
import DragDrop from './DragDrop'
import Error from './Error'
import Footer from './Footer'
import Form from './Form'
import Grid from './Grid'
import Gutter from './Gutter'
import Header from './Header'
import Heading from './Heading'
import Hero from './Hero'
import Hr from './Hr'
import Icon from './Icon'
import IconButton from './IconButton'
import Image from './Image'
import ImageGrid from './ImageGrid'
import Input from './Input'
import Link from './Link'
import List from './List'
import Loader from './Loader'
import LoginForm from './LoginForm'
import Modal from './Modal'
import Nav from './Nav'
import Page from './Page'
import Panel from './Panel'
import Placeholder from './Placeholder'
import RegisterForm from './RegisterForm'
import Row from './Row'
import ScrollButton from './ScrollButton'
import Section from './Section'
import Select from './Select'
import Shape from './Shape'
import SideBar from './SideBar'
import Spinner from './Spinner'
import Table from './Table'
import Tabs from './Tabs'
import User from './User'


const Examples = () => <>
<Route path={'/Badge'} component={Badge} key={Badge} />
<Route path={'/Brand'} component={Brand} key={Brand} />
<Route path={'/Breakpoints'} component={Breakpoints} key={Breakpoints} />
<Route path={'/Button'} component={Button} key={Button} />
<Route path={'/Calendar'} component={Calendar} key={Calendar} />
<Route path={'/Card'} component={Card} key={Card} />
<Route path={'/Carousel'} component={Carousel} key={Carousel} />
<Route path={'/Center'} component={Center} key={Center} />
<Route path={'/Clickable'} component={Clickable} key={Clickable} />
<Route path={'/Code'} component={Code} key={Code} />
<Route path={'/Collapse'} component={Collapse} key={Collapse} />
<Route path={'/Content'} component={Content} key={Content} />
<Route path={'/Device'} component={Device} key={Device} />
<Route path={'/DragDrop'} component={DragDrop} key={DragDrop} />
<Route path={'/Error'} component={Error} key={Error} />
<Route path={'/Footer'} component={Footer} key={Footer} />
<Route path={'/Form'} component={Form} key={Form} />
<Route path={'/Grid'} component={Grid} key={Grid} />
<Route path={'/Gutter'} component={Gutter} key={Gutter} />
<Route path={'/Header'} component={Header} key={Header} />
<Route path={'/Heading'} component={Heading} key={Heading} />
<Route path={'/Hero'} component={Hero} key={Hero} />
<Route path={'/Hr'} component={Hr} key={Hr} />
<Route path={'/Icon'} component={Icon} key={Icon} />
<Route path={'/IconButton'} component={IconButton} key={IconButton} />
<Route path={'/Image'} component={Image} key={Image} />
<Route path={'/ImageGrid'} component={ImageGrid} key={ImageGrid} />
<Route path={'/Input'} component={Input} key={Input} />
<Route path={'/Link'} component={Link} key={Link} />
<Route path={'/List'} component={List} key={List} />
<Route path={'/Loader'} component={Loader} key={Loader} />
<Route path={'/LoginForm'} component={LoginForm} key={LoginForm} />
<Route path={'/Modal'} component={Modal} key={Modal} />
<Route path={'/Nav'} component={Nav} key={Nav} />
<Route path={'/Page'} component={Page} key={Page} />
<Route path={'/Panel'} component={Panel} key={Panel} />
<Route path={'/Placeholder'} component={Placeholder} key={Placeholder} />
<Route path={'/RegisterForm'} component={RegisterForm} key={RegisterForm} />
<Route path={'/Row'} component={Row} key={Row} />
<Route path={'/ScrollButton'} component={ScrollButton} key={ScrollButton} />
<Route path={'/Section'} component={Section} key={Section} />
<Route path={'/Select'} component={Select} key={Select} />
<Route path={'/Shape'} component={Shape} key={Shape} />
<Route path={'/SideBar'} component={SideBar} key={SideBar} />
<Route path={'/Spinner'} component={Spinner} key={Spinner} />
<Route path={'/Table'} component={Table} key={Table} />
<Route path={'/Tabs'} component={Tabs} key={Tabs} />
<Route path={'/User'} component={User} key={User} />

</>

export default Examples
