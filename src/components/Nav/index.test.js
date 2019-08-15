import React from 'react';
import { act } from 'react-dom/test-utils';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import Nav from './index.js';

describe('<Nav />', () => {

  it("renders", () => {
    mount(<Nav />)
  });

  it("accepts background && color prop", () => {
    const component = mount(<Nav background="blue" color="red" />);
    expect(component.find('nav').props().style.background).toEqual('blue');
    expect(component.find('nav').props().style.color).toEqual('red');
  });

});
