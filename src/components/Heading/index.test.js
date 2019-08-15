import React from 'react';
import { act } from 'react-dom/test-utils';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import Heading from './index.js';

describe('<Heading />', () => {

  it("renders", () => {
    mount(<Heading Tag='h1' />)
  });

  it("accepts background && color prop", () => {
    const component = mount(<Heading Tag='h1' background="blue" color="red" />);
    expect(component.find('h1').props().style.background).toEqual('blue');
    expect(component.find('h1').props().style.color).toEqual('red');
  });

});
