import { combineReducers } from "redux";

// reducer import
import counterReducer from "../counter/counter.reducer";
import authReducer from "../auth/auth.reducer";

// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
  auth: authReducer,
  count: counterReducer,
});

export default reducer;
