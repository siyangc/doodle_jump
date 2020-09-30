import { combineReducers } from 'redux';
import adjustReducer from './adjustReducer'

export default combineReducers({
    size: adjustReducer
});