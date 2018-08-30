import { shallow } from 'enzyme';
import React from 'react'
import CounterButton from './CounterButton.js';

const mockColor= 'red'
const wrapper = shallow(<CounterButton color={mockColor}/> );

it('Render CounterButton component', () => {
	expect(wrapper).toMatchSnapshot();
})

it('correctly increments counter', () => {
	wrapper.find('[id="counter"]').simulate('click')
	expect(wrapper.state()).toEqual({count: 2})
})