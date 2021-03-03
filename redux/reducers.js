import { combineReducers } from 'redux'
import clockReducer from './clockModule/reducer'


// COMBINED REDUCERS
const reducers = {
  clock: clockReducer
}

export default combineReducers(reducers)
