
# React Ui Components

A React js UI component library using material design principles.
Includes all the building blocks to build a Gatsby website or a regular web app.
Inline styles used but classes are available to override things.
A config file exists for customizing global sizes and colors.
Tested and linted JavaScript goodness.

## Installation
```
yarn add @patomation/react-ui-components
```
or
```
npm install @patomation/react-ui-components --save
```

## Usage

```javascript
import { Hero, Button, Icon, Footer } from '@patomation/react-ui-components'

const myComponent = () => {
  <div>
    <Hero
      image='/images/hero_image.jpg'
      title='My Cool Site'
      description='well met'>

    <Button title='cool beans' />

    <Icon name='star' /> {/* Supports svg material icons no font required */}

    <Footer>Footer Stuff</Footer>
  </div>
}

export default MyComponent

```


## Components
 - [Badge](src/Badge/doc.md)
 - [Brand](src/Brand/doc.md)
 - [Breakpoints](src/Breakpoints/doc.md)
 - [Button](src/Button/doc.md)
 - [Calendar](src/Calendar/doc.md)
 - [Card](src/Card/doc.md)
 - [Carousel](src/Carousel/doc.md)
 - [Center](src/Center/doc.md)
 - [Clickable](src/Clickable/doc.md)
 - [Code](src/Code/doc.md)
 - [Collapse](src/Collapse/doc.md)
 - [config.js](src/config.js/doc.md)
 - [Content](src/Content/doc.md)
 - [DragDrop](src/DragDrop/doc.md)
 - [Error](src/Error/doc.md)
 - [Footer](src/Footer/doc.md)
 - [Form](src/Form/doc.md)
 - [Grid](src/Grid/doc.md)
 - [Gutter](src/Gutter/doc.md)
 - [Header](src/Header/doc.md)
 - [Heading](src/Heading/doc.md)
 - [Hero](src/Hero/doc.md)
 - [Hr](src/Hr/doc.md)
 - [Icon](src/Icon/doc.md)
 - [IconButton](src/IconButton/doc.md)
 - [Image](src/Image/doc.md)
 - [ImageGrid](src/ImageGrid/doc.md)
 - [index.js](src/index.js/doc.md)
 - [Input](src/Input/doc.md)
 - [Link](src/Link/doc.md)
 - [List](src/List/doc.md)
 - [Loader](src/Loader/doc.md)
 - [LoginForm](src/LoginForm/doc.md)
 - [Modal](src/Modal/doc.md)
 - [Nav](src/Nav/doc.md)
 - [Panel](src/Panel/doc.md)
 - [RegisterForm](src/RegisterForm/doc.md)
 - [Row](src/Row/doc.md)
 - [ScrollButton](src/ScrollButton/doc.md)
 - [Section](src/Section/doc.md)
 - [Select](src/Select/doc.md)
 - [Shape](src/Shape/doc.md)
 - [SideBar](src/SideBar/doc.md)
 - [Spinner](src/Spinner/doc.md)
 - [Tabs](src/Tabs/doc.md)
 - [User](src/User/doc.md)
