import { combineReducers } from "redux";
import cartReducer from "./cart/cartReducer";
import reducer from "./favorites/favoritesReducer";


const rootReducer = combineReducers({
  cart: cartReducer,
  fav: reducer
})

export default rootReducer