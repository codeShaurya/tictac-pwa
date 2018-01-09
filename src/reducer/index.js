import { combineReducers } from 'redux';

import fillSquare from './fillSquare';
import player from './player';


const rootReducer = combineReducers({
  fillSquare,
  player,
});

export default rootReducer;
