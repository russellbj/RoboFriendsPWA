import { shallow } from 'enzyme';
import React from 'react'
import ErrorBoundary from './ErrorBoundary.js';

const mockState ={
		hasError: false
	}
const wrapper = shallow(<ErrorBoundary/> );

it('Render ErrorBoundary component', () => {
	expect(wrapper).toMatchSnapshot();
})

it('Test Error Catch', () => {
	wrapper.instance().setState({hasError: true})
	expect(wrapper.state()).toEqual({hasError: true})
})