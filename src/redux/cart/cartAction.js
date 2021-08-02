import { ADD_TO_CART } from "./cartTypes"


export const addToCart = (wholeProduct = null) => {
  return {
    type: ADD_TO_CART,
    payload: wholeProduct
  }
}
