import React from 'react';
import { act } from 'react-dom/test-utils';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import Link from './index.js';

describe('<Link />', () => {

  it("renders", () => {
    mount(<Link />)
  });

  it("hovers", () => {

    let hover = null;

    const component = mount(<Link onHover={ boolean =>{
      hover = boolean;
    }} />);

    component.simulate('mouseenter')
    expect(hover).toEqual(true)

    component.simulate('mouseleave')
    expect(hover).toEqual(false)

  });

  it("accepts background && color prop", () => {
    const component = mount(<Link background="blue" color="red" />);
    expect(component.find('a').props().style.background).toEqual('blue');
    expect(component.find('a').props().style.color).toEqual('red');
  });

});
