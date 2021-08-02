import { ADD_TO_FAV } from "./favoritesType"


const initialState = {
  favArray:[]
}

const reducer = (state = initialState,action) => {

  switch(action.type){

    case ADD_TO_FAV: return {
      ...state,
      favArray: [...state.favArray, action.payload]
    }
    default: return state

  }


}

export default reducer