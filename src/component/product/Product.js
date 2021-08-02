
import { connect } from "react-redux"
import { addToCart } from "../../redux"
import { addToFavorites } from "../../redux/favorites/favoritesAction"
import "./Product.css"

const Product = (prop) => {

  const {imageURL, name, price, assured, isNew}= prop

  return (
    <div className="product">
      <img className="product__image" src={imageURL} alt="product_img"/>
      <h2 className="product__name">{name}</h2>
      <h4 className="product__price">₹ {price}</h4>
      <div className="product__offers">
        {assured ? <p>Assured</p> : null }
        {isNew ? <p>New</p> : null }
      </div>
      <button onClick={()=>prop.addCart(prop)} className="product__button">Add to Cart</button>
      
      <button onClick={()=>prop.addFav(prop)} className="product__button">Add to Fav</button>
    </div>
  )
}

const mapStateToProps = state => {
  return{
    favArray: state.fav.favArray,
    cartArray: state.cart.cartArray
  }
}

const mapDispatchToProps = dispatch => {
  return{
    addFav:(payload) => dispatch(addToFavorites(payload)),
    addCart: (payload) => dispatch(addToCart(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)
