import { combineReducers } from 'redux'
import auth from './auth'
import map from './map'
import group from './group'

export default combineReducers({
  auth, map, group
})