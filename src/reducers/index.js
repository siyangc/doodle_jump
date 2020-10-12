import { combineReducers } from 'redux';
import {sizeReducer} from './sizeReducer';
import { doodlerReducer } from './doodlerReducer'
import {platformsReducer} from './platformsReducer'
import {keyCodeReducer} from './keyReducer'
import {scoreReducer} from './scoreReducer'
export default combineReducers({
    size: sizeReducer,
    doodler: doodlerReducer,
    platforms: platformsReducer,
    keyCode: keyCodeReducer,
    score: scoreReducer
});