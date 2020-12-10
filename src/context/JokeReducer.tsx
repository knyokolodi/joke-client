const jokeReducer = (state: any, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case 'GET_CATEGORIES':
      return {
        ...state,
        categories: payload,
      };
    default:
      return state;
  }
};

export default jokeReducer;
