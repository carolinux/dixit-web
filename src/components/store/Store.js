import React, { createContext, useReducer } from 'react';
import Reducer from './Reducer'
 
const initialState = {
  players: {},
  playersCounter: 0
};

const Store = ({ children }) => {
  const [players, setPlayers] = useReducer(Reducer, initialState);
  const [playersCounter, setPlayersCounter] = useReducer(Reducer, initialState);
  return (
    <Context.Provider value={[players, setPlayers], [playersCounter, setPlayersCounter]}>
      { children }
    </Context.Provider>
  )
};

export const Context = createContext(initialState);
export default Store;