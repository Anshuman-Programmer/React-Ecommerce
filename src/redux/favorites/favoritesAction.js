import { ADD_TO_FAV, DEL_FR_FAV } from "./favoritesType"


export const addToFavorites = (wholeProduct = null) => {
  return {
    type: ADD_TO_FAV,
    payload: wholeProduct
  }
}

export const deleteFromFavorites = () => {
  return {
    type: DEL_FR_FAV
  }
}