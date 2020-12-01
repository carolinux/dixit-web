const Reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PLAYER':
      
      if(state.playersCounter>5) {
        return state;
      }

      const playerName = action.payload;
      let playerToBeAdded = {};
      playerToBeAdded[playerName] = true;
      
      return {
        ...state,
        playersCounter: state.playersCounter+1,
        players: {...state.players, ...playerToBeAdded}
      };
    default:
      return state;
  }
};

export default Reducer;