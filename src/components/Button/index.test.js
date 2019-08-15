import React from 'react';
import { act } from 'react-dom/test-utils';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import Button from './index.js';

describe('<Button />', () => {

  it("renders", () => {
    mount(<Button />)
  });

  it("hovers", () => {

    let hover = null;

    const button = mount(<Button onHover={ boolean =>{
      hover = boolean;
    }} />);

    button.simulate('mouseenter')
    expect(hover).toEqual(true)

    button.simulate('mouseleave')
    expect(hover).toEqual(false)

  });

  it("accepts background && color prop", () => {
    const component = mount(<Button background="blue" color="red" />);
    expect(component.find('button').props().style.background).toEqual('blue');
    expect(component.find('button').props().style.color).toEqual('red');
  });

});
