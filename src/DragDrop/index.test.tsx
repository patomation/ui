import * as React from 'react'
import { mount, shallow } from 'enzyme'
import { act } from 'react-dom/test-utils'

import DragDrop from './index'

describe('<DragDrop />', () => {
  it('renders', () => {
    mount(<DragDrop />)
  })

  describe('with Drag events defined ', () => {
    const handleDragStart = jest.fn()
    const handleDragOver = jest.fn()
    const handleDrop = jest.fn()
    const handleDragLeave = jest.fn()
    const handleDrag = jest.fn()

    const component = shallow(
      <DragDrop
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onDragLeave={handleDragLeave}
        onDrag={handleDrag} />)

    it('calles onDragStart', () => {
      act(() => {
        component.find('div.dragdrop').props().onDragStart({ dataTransfer: { setData: jest.fn() } })
      })
      expect(handleDragStart).toBeCalled()
    })

    it('calles onDragOver once', () => {
      act(() => {
        component.find('div.dragdrop').props().onDragOver({ preventDefault: jest.fn() })
        component.find('div.dragdrop').props().onDragOver({ preventDefault: jest.fn() })
      })
      expect(handleDragOver).toBeCalledTimes(1)
    })

    it('calles onDrop', () => {
      act(() => {
        component.find('div.dragdrop').props().onDrop()
      })
      expect(handleDrop).toBeCalled()
    })

    it('calles onDragLeave', () => {
      act(() => {
        component.find('div.dragdrop').props().onDragLeave()
      })
      expect(handleDragLeave).toBeCalled()
    })

    it('calles onDrag', () => {
      act(() => {
        component.find('div.dragdrop').props().onDrag()
      })
      expect(handleDrag).toBeCalled()
    })
  })

  it('handles drag events and does not break when not defined', () => {
    const handleDragStart = jest.fn()
    const handleDragOver = jest.fn()
    const handleDragLeave = jest.fn()

    const component = shallow(
      <DragDrop
        // onDragStart={null}
        // onDragOver={null}
        // onDragLeave={null}
      />)

    act(() => {
      component.find('div.dragdrop').props().onDragStart({ dataTransfer: { setData: jest.fn() } })
    })
    expect(handleDragStart).not.toBeCalled()

    act(() => {
      component.find('div.dragdrop').props().onDragOver({ preventDefault: jest.fn() })
    })
    expect(handleDragOver).not.toBeCalled()

    component.find('div.dragdrop').props().onDragLeave()
    act(() => {
      expect(handleDragLeave).not.toBeCalled()
    })
  })

  it('has grab cursor only when draggable', () => {
    const withcursor = mount(<DragDrop draggable={true} />)
    expect(withcursor.find('div.dragdrop').props().style.cursor).toEqual('grab')
    const withoutcursor = mount(<DragDrop draggable={false} />)
    expect(withoutcursor.find('div.dragdrop').props().style.cursor).toEqual(undefined)
  })

  it('accepts background && color prop', () => {
    const component = mount(<DragDrop background="blue" color="red" />)
    expect(component.find('div.dragdrop').props().style.background).toEqual('blue')
    expect(component.find('div.dragdrop').props().style.color).toEqual('red')
  })
})
