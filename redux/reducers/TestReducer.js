import { PLAYER_STATE } from '../actions/types';

const initialState = {
  playerState: false,
  isPlayerDisplay: false
};

const TestReducer = (state = initialState, action) => {
    console.log("placeReducer: action==", action);
    
  switch(action.type) {
    case PLAYER_STATE:    
      return {
        ...state,
        isPlayerDisplay: action.isPlayerDisplay
      };
    default:
      return state;
  }
}

export default TestReducer;