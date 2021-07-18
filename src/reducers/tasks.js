export default (state = [], action) => {
    switch (action.type) {
      case "SET_ALL_TASKS":
        return action.pets;
      case "CLEAR_ALL_TASKS":
        return [];
      default:
        return state;
    }
  };
  