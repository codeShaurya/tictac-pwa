import { player1 } from '../data/player';
import { player2 } from '../data/player';

const initialState = {
  player1,
  player2,
};

function player(state = initialState, action) {
  switch (action.type) {
    case 'PLAYER_INFO':
      {
        const { payload } = action;
        return { ...state, ...payload };
      }
    default:
      return state;
  }
}

export default player;
