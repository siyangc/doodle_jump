import { combineReducers } from 'redux';
import {sizeReducer} from './sizeReducer';
import { doodlerReducer } from './doodlerReducer'
import {platformsReducer} from './platformsReducer'

export default combineReducers({
    size: sizeReducer,
    doodler: doodlerReducer,
    platforms: platformsReducer
});