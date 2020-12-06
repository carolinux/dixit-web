import React, { createContext, useReducer } from 'react';
import Reducer from './Reducer'
 
const initialState = {
  players: {},
  playersCounter: 0,
  selectedCard: undefined,
  cardsPlayed: []
};

const Store = ({ children }) => {
  const [players, setPlayers] = useReducer(Reducer, initialState);
  const [playersCounter, setPlayersCounter] = useReducer(Reducer, initialState);
  const [selectedCard, setSelectedCard] = useReducer(Reducer, initialState);
  const [cardsPlayed, setCardsPlayed] = useReducer(Reducer, initialState);
  return (
    <Context.Provider value={[players, setPlayers],
      [playersCounter, setPlayersCounter],
      [selectedCard, setSelectedCard],
      [cardsPlayed, setCardsPlayed] }>
      { children }
    </Context.Provider>
  )
};

export const Context = createContext(initialState);
export default Store;
