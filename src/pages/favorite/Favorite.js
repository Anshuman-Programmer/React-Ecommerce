import { connect } from "react-redux"
import Product from "../../component/product/Product"
import { addToFavorites } from "../../redux/favorites/favoritesAction"
import "./Favorite.css"


const Favorite = (prop) => {


  console.log(prop.favArray)

  return (
    <div className="favorite">
      {prop.favArray.map((product, index)=>(<Product key={index} imageURL={product.imageURL} name={product.name} price={product.price} key={index} assured={product.companyAssured} isNew={product.isNewProduct}/>))}

    </div>
  )
}

const mapStateToProps = state => {
  return{
    favArray: state.fav.favArray
  }
}

const mapDispatchToProps = dispatch => {
  return{
    addFav:(payload) => dispatch(addToFavorites(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorite)
