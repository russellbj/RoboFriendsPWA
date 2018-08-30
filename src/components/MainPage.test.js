import { shallow } from 'enzyme';
import React from 'react'
import MainPage from './MainPage.js';

let wrapper;
beforeEach(() => {
	const mockProps ={
		onRequestRobots: jest.fn(),
		robots: [],
		searchField: "",
		isPending: false
	}
	wrapper = shallow(<MainPage {... mockProps}/>)
})

it('renders MainPage', () => {
	expect(wrapper).toMatchSnapshot();
})

it('filters robots correctly (all)', () => {
	const mockProps2 ={
		onRequestRobots: jest.fn(),
		robots: [{
			id: 3,
			name: 'John',
			email: 'john@gmail.com'
		}],
		searchField: "",
		isPending: false
	}
	const wrapper2 = shallow(<MainPage {... mockProps2}/>)

	expect(wrapper2.instance().filterRobots()).toEqual([{
			id: 3,
			name: 'John',
			email: 'john@gmail.com'
		}]);
})

it('filters robots correctly (none)', () => {
	const mockProps2 ={
		onRequestRobots: jest.fn(),
		robots: [{
			id: 3,
			name: 'John',
			email: 'john@gmail.com'
		}],
		searchField: "A",
		isPending: false
	}
	const wrapper2 = shallow(<MainPage {... mockProps2}/>)

	expect(wrapper2.instance().filterRobots()).toEqual([]);
})

it('filters robots correctly (isPending = True)', () => {
	const mockProps2 ={
		onRequestRobots: jest.fn(),
		robots: [{
			id: 3,
			name: 'John',
			email: 'john@gmail.com'
		}],
		searchField: "A",
		isPending: true
	}
	const wrapper2 = shallow(<MainPage {... mockProps2}/>)

	expect(wrapper2.instance().filterRobots()).toEqual([]);
})