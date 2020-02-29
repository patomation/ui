import React from 'react'
import { mount } from 'enzyme'
import moment from 'moment'

import Calendar from './index.js'

describe('<Calendar />', () => {
  it('renders', () => {
    mount(<Calendar />)
  })

  const tomorrow = moment().add(1, 'day').format('YYYY-MM-DD')
  it('clicking a day', () => {
    const today = moment().format('YYYY-MM-DD')
    let eventArray = null
    const component = mount(
      <Calendar
        selectedColor='red'
        events={[
          {
            start: tomorrow
          }
        ]}
        onClick={({ day, events }) => {
          eventArray = events
        }} />)
    component.find(`button.day_${tomorrow}`).simulate('click')
    expect(eventArray[0].start).toEqual(tomorrow)
    component.find(`button.day_${today}`).simulate('click') // clicking today should do nothing
    expect(eventArray.length).toEqual(1) // expect events to be unchanges
  })

  it('works without click event', () => {
    const component = mount(<Calendar />)
    component.find(`button.day_${tomorrow}`).simulate('click')
  })

  it('goes to previous year', () => {
    const date = moment().subtract(1, 'year')
    const month = moment(date).format('MMMM')
    const year = moment(date).format('YYYY')
    const component = mount(<Calendar />)
    component.find('button.calendar__prevyear').simulate('click')
    expect(component.find('div.calendar__title').text()).toEqual(`${month} ${year}`)
  })

  it('goes to previous month', () => {
    const date = moment().subtract(1, 'month')
    const month = moment(date).format('MMMM')
    const year = moment(date).format('YYYY')
    const component = mount(<Calendar />)
    component.find('button.calendar__prevmonth').simulate('click')
    expect(component.find('div.calendar__title').text()).toEqual(`${month} ${year}`)
  })

  it('goes to next month', () => {
    const date = moment().add(1, 'month')
    const month = moment(date).format('MMMM')
    const year = moment(date).format('YYYY')
    const component = mount(<Calendar />)
    component.find('button.calendar__nextmonth').simulate('click')
    expect(component.find('div.calendar__title').text()).toEqual(`${month} ${year}`)
  })

  it('goes to next year', () => {
    const date = moment().add(1, 'year')
    const month = moment(date).format('MMMM')
    const year = moment(date).format('YYYY')
    const component = mount(<Calendar />)
    component.find('button.calendar__nextyear').simulate('click')
    expect(component.find('div.calendar__title').text()).toEqual(`${month} ${year}`)
  })

  it('accepts background && color prop', () => {
    const component = mount(<Calendar background="blue" color="red" />)
    expect(component.find('div.calendar').props().style.background).toEqual('blue')
    expect(component.find('div.calendar').props().style.color).toEqual('red')
  })
})
