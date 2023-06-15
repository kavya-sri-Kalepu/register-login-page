export const registerUser = (email, name, password) => {
    return {
      type: "REGISTER_USER",
      payload: {
        email,
        name,
        password,
      },
    };
  };
  export const logoutUser = () => {
    return {
      type: "LOGOUT_USER",
    };
  };