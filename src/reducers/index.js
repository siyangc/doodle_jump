import { combineReducers } from 'redux';
import {adjustSizeReducer} from './adjustSizeReducer';
import {doodlerBehaviorReducer} from './doodlerBehaviorReducer'

export default combineReducers({
    size: adjustSizeReducer,
    doodler: doodlerBehaviorReducer
});