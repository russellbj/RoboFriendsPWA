import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
 } from './constants';

 import * as reducers from './reducers.js'

 const initialStateSearch = {
 	searchField: ''
 }

 describe('searchRobots', () => {
 	it('should return initial state', () => {
 		expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: "" })
 	})
 })

 it('should handle CHANGE_SEARCHFIELD event', () => {
 	expect(reducers.searchRobots(initialStateSearch, {
 		type: CHANGE_SEARCHFIELD,
 		payload: 'abc'
 	})).toEqual({searchField: 'abc'})
 })

 describe('requestRobots', () => {
 	const initialStateRobots = {
 		robots: [],
 		isPending: false
 	}
 	it('should handle initial state', () => {
 		expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots)
 	})

 	it('should handle CHANGE_SEARCHFIELD_PENDING', () => {
	 	expect(reducers.requestRobots(initialStateRobots, {
	 		type: REQUEST_ROBOTS_PENDING
	 	})).toEqual({
	 		robots: [],
	 		isPending: true
	 	})
 	})

 	it('should handle CHANGE_SEARCHFIELD_SUCCESS', () => {
	 	expect(reducers.requestRobots(initialStateRobots, {
	 		type: REQUEST_ROBOTS_SUCCESS,
	 		payload: [{
	 			id: '123',
	 			name: 'test',
	 			email: 'test@gmail.com'
	 		}]
	 	})).toEqual({
	 		robots: [{
	 			id: '123',
	 			name: 'test',
	 			email: 'test@gmail.com'
	 		}],
	 		isPending: false
	 	})
 	})

 	it('should handle CHANGE_SEARCHFIELD_FAILED', () => {
	 	expect(reducers.requestRobots(initialStateRobots, {
	 		type: REQUEST_ROBOTS_FAILED,
	 		payload: 'ERROR'
	 	})).toEqual({
	 		error: 'ERROR',
	 		robots: [],
	 		isPending: false
	 	})
 	})

 })