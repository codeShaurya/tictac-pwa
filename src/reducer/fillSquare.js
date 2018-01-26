import { board ,winner,xNext} from '../data/board';
import { player1 } from '../data/player';
import { player2 } from '../data/player';

const initialState = {
  board,
  xNext,
  winner,
  player1,
  player2,
}

function fillSquare(state = initialState, action) {
  switch (action.type) {
    case 'FILL_SQUARE':
      {
        const { index,xNext } = action.payload;
        let newState={...state};

        let arr= state.board;

        arr[index]=xNext ?state.player1.code : state.player2.code;
          newState={
            ...newState,
            xNext:!state.xNext,
            board:arr,
          }

        return newState;
      }


       case 'PLAYER_INFO':
      {
        const { player1,player2} = action.payload;
        let newState={...state};
        newState ={
          ...newState,
          player1,
          player2,              
        }

        return newState;
      }

    default:
      return state
  }
}

export default fillSquare;