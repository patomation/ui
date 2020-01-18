import * as React from 'react'
import { mount } from 'enzyme'

import List from './index'

describe('<List />', () => {
  it('renders', () => {
    mount(<List />)
  })

  it('renders list with data', () => {
    mount(<List data={['item1', 'item2', 'item3']} />)
  })

  it('renders list with children', () => {
    mount(
      <List>
        <span>{'item1'}</span>
        <span>{'item2'}</span>
        <span>{'item3'}</span>
      </List>)
  })
})
