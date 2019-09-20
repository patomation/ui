//Setup file that gets run at the beginning of jest tests. see jest.config.js setupFiles

//load global DOM document to use enzyme's mount()
import 'jsdom-global/register';

// Fixes Error: matchMedia not present, legacy browsers require a polyfill
window.matchMedia = window.matchMedia || function() {
  return {
    matches : false,
    addListener : function() {},
    removeListener: function() {}
  };
};

//Import configure from enzyme
import { configure } from 'enzyme';
//Import react adaptor
import Adapter from 'enzyme-adapter-react-16';
//Configure enzyme to use adapter
configure({ adapter: new Adapter() });
