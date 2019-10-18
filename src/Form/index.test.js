import React from 'react'
import { mount, shallow } from 'enzyme'
import { act } from 'react-dom/test-utils'

import Form from './index.js'
import { Input } from '../'
// import { Formik } from 'formik'

describe('<Form />', () => {
  it('renders', () => {
    mount(<Form />)
  })

  it('submits', () => {
    const handleSubmit = jest.fn((values, callback) => {
      callback() // setSubmitting callback
    })
    const setSubmitting = jest.fn()
    const component = mount(<Form fields={[{ name: 'test' }]} onSubmit={handleSubmit} />)
    // Mock submit
    component.find('Formik').props().onSubmit(['value1', 'value2'], { setSubmitting })
    expect(handleSubmit).toBeCalled()
    expect(setSubmitting).toBeCalled()
  })
  it('submit doesnt break', () => {
    const handleSubmit = jest.fn((values, callback) => {
      callback() // setSubmitting callback
    })
    const setSubmitting = jest.fn()
    const component = mount(<Form fields={[{ name: 'test' }]} onSubmit={null} />)
    // Mock submit
    component.find('Formik').props().onSubmit(['value1', 'value2'], { setSubmitting })
    expect(handleSubmit).not.toBeCalled()
    expect(setSubmitting).not.toBeCalled()
  })

  it('renders labels and placeholders', () => {
    const component = mount(
      <Form
        fields={[{
          name: 'test',
          label: 'Custom Label',
          placeholder: 'Custom Placeholder'
        }, {
          name: 'test2'
        }]}
        labels={true}
        placeholders={true}/>)
    expect(component.find('label').first().text()).toEqual('Custom Label')
    expect(component.find('label').at(1).text()).toEqual('Test2')
    expect(component.find('Input').first().props().placeholder).toEqual('Custom Placeholder')
    expect(component.find('Input').at(1).props().placeholder).toEqual('Test2')
  })

  it('triggers errors', () => {
    const component = shallow(<Form fields={[{ name: 'test', required: true }]} placeholders={true} />)
    // Mock submit
    // component.find('button').simulate('click')
    // component.find('Input').dive().setProps({error: 'Required'})
    // expect(
    //   component
    //     .find('Formik')
    //     .dive()
    //     .find('form')
    //     .find('div').first()
    //     .find(Input).props().placeholder).toEqual('Test')
    const inputComponent = component
      .find('Formik').dive()
      .find('form')
      .find('div').first()
      .find(Input)

    act(() => {
      inputComponent.dive().setProps({ error: 'Required' })
    })
    // TODO make this work
    // expect(inputComponent.dive().find('div.input__error').text()).toEqual('Required')
  })

  it('accepts background && color prop', () => {
    const component = mount(<Form background="blue" color="red" fields={[{ name: 'test' }]} />)
    expect(component.find('div.form').props().style.background).toEqual('blue')
    expect(component.find('div.form').props().style.color).toEqual('red')
  })
})
