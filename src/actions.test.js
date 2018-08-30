import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
 } from './constants';

import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

import * as actions from './actions.js';

const mockStore = configureStore([thunkMiddleware])

describe('setSearchField', () => {
	it('should change searchField', () => {
		const expectedText = "search term"
		const expectedAction = {
			type: CHANGE_SEARCHFIELD,
			payload: "search term"
		}
		expect(actions.setSearchField(expectedText)).toEqual(expectedAction)
	})
})

describe('requestRobots', () => {
	
	it('handles api request', () => {
		const store = mockStore();
		store.dispatch(actions.requestRobots());
		const action = store.getActions();
		const expectedAction = {
			type: REQUEST_ROBOTS_PENDING
		}
		expect(action[0]).toEqual(expectedAction)
	})
})