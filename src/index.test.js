import React from 'react';
import { act } from 'react-dom/test-utils';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import ReactDOM from "react-dom";
import { mock } from "jest";

import { renderToDOM, moduleHotAccept } from "./index";

// import './index.js';

describe('module.hot', () => {
  it('should only call hot.accept() if hot is defined', () => {
      const accept = jest.fn();
      const mockModule = { hot: { accept } };
      moduleHotAccept(mockModule);
      expect(accept).toHaveBeenCalled();
    }
  );

  it('should not throw if module is undefined', () => {
      expect(moduleHotAccept).not.toThrow();
    }
  );

  it('should not throw if module.hot is undefined', () => {
      expect(
        () => moduleHotAccept({notHot: -273})
      ).not.toThrow();
    }
  );
});


describe('ReactDOM.render', () => {
  var root = document.createElement('div');

  const originalRender = ReactDOM.render;
    const originalGetElement = global.document.getElementById;
    beforeEach(() => {
      global.document.getElementById = () => true;
      ReactDOM.render = jest.fn();
    });
    afterAll(() => {
      global.document.getElementById = originalGetElement;
      ReactDOM.render = originalRender;
    });
    it("should call ReactDOM.render", () => {
      renderToDOM(root  );
      expect(ReactDOM.render).toHaveBeenCalled();
    });

});
