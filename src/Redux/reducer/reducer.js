const intialState = {
  user: [],
  loginuser: null,
};
const reducer = (state = intialState, action) => {
  console.log("action", action);
  switch (action.type) {
    case "SaveRegisterData":
      return {
        ...state,
        user: [...state.user, action.payload],
      };

    case "Check_data":
      const Logindata = action.payload;
      if (state.user.length === 0) {
        console.log("1111111111111111111111111111111");
        alert("here first");
        return state;
      }
      const found = state.user.filter(
        (logininfo) =>
          logininfo.email === Logindata.email &&
          logininfo.password === Logindata.password
      );
      if (found.length === 1) {
        console.log("0222");
        const first = found[0];
        return { ...state, loginuser: first };
      }

      return state;
    case "LOGOUT":
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export default reducer;
