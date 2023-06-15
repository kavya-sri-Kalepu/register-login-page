const initialState = {
    users: [],
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "REGISTER_USER":
        return {
          ...state,
          users: [...state.users, action.payload],
        };
      case "LOGOUT_USER":
        return {
          ...state,
          users: [],
        };
      default:
        return state;
    }
  };
  
  export default reducer;