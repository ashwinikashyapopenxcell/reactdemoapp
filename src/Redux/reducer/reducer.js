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
      console.log(Logindata);
      if (state.user.length === 0) {
        return state;
      }
      const found = state.user.filter(
        (logininfo) =>
          logininfo.email === Logindata.email &&
          logininfo.password === Logindata.password
      );
      if (found.length === 1) {
        const first = found[0];
        return { ...state, loginuser: first };
      }

      return state;

    default:
      return state;
  }
};

export default reducer;
