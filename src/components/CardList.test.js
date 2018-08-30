import {shallow} from 'enzyme';
import CardList from './CardList.js';
import React from 'react';

it('expects to render CardList', () => {
	const mockRobots = [
	{
		id: 1,
		name: 'Robo Boy',
		username: 'RoboBoy123',
		email: 'robo@boy.com'
	}
	]
	expect(shallow(<CardList robots={mockRobots}/> )).toMatchSnapshot();
})