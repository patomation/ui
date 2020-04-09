
# React Ui Components

A React js UI component library using material design principles.
Includes all the building blocks to build a Gatsby website or a regular web app.
Inline styles used but classes are available to override things.
A config file exists for customizing global sizes and colors.
Tested and linted JavaScript goodness.

## Installation
```
yarn add @patomation/ui
```
or
```
npm install @patomation/ui --save
```

## Basic Usage

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

# [Full Documentation](https://ui.patomation.com)

# Troubleshooting

Error: ENOSPC: System limit for number of file watchers reached, watch
fix: ```echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p```
https://github.com/guard/listen/wiki/Increasing-the-amount-of-inotify-watchers#the-technical-details