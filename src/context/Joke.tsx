import React, { createContext, useReducer } from 'react';

import JokeReducer from './JokeReducer';

export interface JokeContextInterface {
  categories: Array<String>;
  loading: Boolean;
  getCategories(categories: Array<String>): any;
}

const initialState = {
  categories: [],
  loading: true,
  getCategories: (categories: Array<String>) => {},
};

//Create context
export const JokeContext = createContext<JokeContextInterface>(initialState);

//Create provider
export const JokeProvider = (props: any) => {
  const [state, dispatch] = useReducer(JokeReducer, initialState);

  const getCategories = (categories: Array<String>) => {
    dispatch({
      type: 'GET_CATEGORIES',
      payload: categories,
    });
  };
  return (
    <JokeContext.Provider
      value={{ categories: state.categories, getCategories }}
      {...props}
    ></JokeContext.Provider>
  );
};
