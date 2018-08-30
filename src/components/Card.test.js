import { shallow } from 'enzyme';
import React from 'react'
import Card from './Card.js';

it('Render card component', () => {
expect(shallow(<Card />)).toMatchSnapshot();
})