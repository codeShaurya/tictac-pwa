import { board } from '../data/board';
import { player1 } from '../data/player';
import { player2 } from '../data/player';

const initialState = {
  board,
  player1,
  player2,
}

function fillSquare(state = initialState, action) {
  switch (action.type) {
    case 'FILL_SQUARE':
      {
        const { index } = action;

        return state;
      }
    default:
      return state
  }
}

export default fillSquare;