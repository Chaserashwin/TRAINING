const initial = {
  count: 0,
};
const reduceFunction = (state = initial, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        count: state + 1,
      };
    case "SUB":
      return {
        ...state,
        count: state - 1,
      };
    case "RESET":
      return {
        count: 0,
      };
    default:
      return state;
  }
};

export default reduceFunction;
