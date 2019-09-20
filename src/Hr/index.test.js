import React from 'react';
import { mount } from 'enzyme';

import Hr from './index.js';

describe('<Hr />', () => {

  it("renders", () => {
    mount(<Hr />)
  });

  it("accepts background && color prop", () => {
    const component = mount(<Hr background="blue" color="red" />);
    expect(component.find('hr').props().style.background).toEqual('blue');
    expect(component.find('hr').props().style.color).toEqual('red');
  });

});
