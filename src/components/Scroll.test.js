import { shallow } from 'enzyme';
import React from 'react'
import Scroll from './Scroll.js';

it('Render Scroll component', () => {
expect(shallow(<Scroll />)).toMatchSnapshot();
})