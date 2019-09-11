import React from 'react';
import { act } from 'react-dom/test-utils';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import Header from './index.js';

describe('<Header />', () => {

  it("renders", () => {
    mount(<Header />)
  });

  it("accepts background && color prop", () => {
    const component = mount(<Header background="blue" color="red" />);
    expect(component.find('header').props().style.background).toEqual('blue');
    expect(component.find('header').props().style.color).toEqual('red');
  });
});
