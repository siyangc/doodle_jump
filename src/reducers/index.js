import { combineReducers } from 'redux';
import {adjustSizeReducer} from './adjustSizeReducer'

export default combineReducers({
    size: adjustSizeReducer
});