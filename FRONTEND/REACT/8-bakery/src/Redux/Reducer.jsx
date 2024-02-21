const initial = {
  cake: 20,
  pastry: 30,
};

const reduceFunction = (state = initial, action) => {
  switch (action.type) {
    case "CAKE":
      return {
        ...state,
        cake: state.cake - 1,
      };
    case "PASTRY":
      return {
        ...state,
        pastry: state.pastry - 1,
      };
    default:
      return state;
  }
};

export default reduceFunction;
