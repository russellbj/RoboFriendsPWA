import { shallow } from 'enzyme';
import React from 'react'
import SearchBox from './SearchBox.js';

it('Render SearchBox component', () => {
expect(shallow(<SearchBox />)).toMatchSnapshot();
})