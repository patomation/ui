import React from 'react';
import { act } from 'react-dom/test-utils';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import SideBarItem from './index.js';

describe('<SideBarItem />', () => {

  it("renders", () => {
    mount(<SideBarItem />)
  });

  it("hovers", () => {

    let hover = null;

    const component = mount(<SideBarItem onHover={ boolean =>{
      hover = boolean;
    }} />);

    component.simulate('mouseenter')
    expect(hover).toEqual(true)

    component.simulate('mouseleave')
    expect(hover).toEqual(false)

  });

  it("accepts background && color prop", () => {
    const component = mount(<SideBarItem background="blue" color="red" />);
    expect(component.find('button').props().style.background).toEqual('blue');
    expect(component.find('button').props().style.color).toEqual('red');
  });

});
