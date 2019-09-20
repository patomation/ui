import React from 'react';
import { mount } from 'enzyme';

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
