import { combineReducers } from 'redux';
import {sizeReducer} from './sizeReducer';
import { doodlerReducer } from './doodlerReducer'
import {platformsReducer} from './platformsReducer'
import {keyCodeReducer} from './keyReducer'
export default combineReducers({
    size: sizeReducer,
    doodler: doodlerReducer,
    platforms: platformsReducer,
    keyCode: keyCodeReducer
});