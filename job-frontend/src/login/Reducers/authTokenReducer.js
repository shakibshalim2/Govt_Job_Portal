import jwtDecode from "jwt-decode";

function authTokenReducer(state = {}, action) {
  switch (action.type) {
    case "SETAUTHTOKEN":
      localStorage.setItem("token", action.data);

      const decoded = jwtDecode(action.data);

      return { ...decoded };

    case "CLEARAUTHTOKEN":
      localStorage.removeItem("token");
      return {};

    default:
      return { ...state };
  }
}
export default authTokenReducer;
