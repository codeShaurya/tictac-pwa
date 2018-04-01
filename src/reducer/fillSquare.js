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

        if(player1.name === "")
          player1.name = "PLAYER_1";

        if(player2.name === "")
          player2.name = "PLAYER_2";

        if(player1.code === "")
          player1.code = "X";
        
          if(player2.code === "")
          player2.code = "O";
         
        newState ={
          ...newState,
          player1,
          player2,              
        }

        return newState;
      }

      case 'RESET':
      {

        const board = Array(9).fill(null);
        
        return {...state, board, xNext : true,  winner : ''};
      }

      case 'WINNER':{
        const newState = { ...state };
        const {board} = state;

        const pos = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];

        let winner = "";
        for (var i = 0; i < 8; i++) {
          const [a, b, c] = pos[i];
          if (board[a] && board[a] === board[b] && board[a] === board[c])
            winner = board[a];
        }

      return {...newState, winner};
    }

    default:
      return state
  }
}

export default fillSquare;