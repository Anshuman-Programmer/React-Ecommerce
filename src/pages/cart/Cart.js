import { Link } from "react-router-dom";

import { connect } from "react-redux"
import Product from "../../component/product/Product"
import "./Cart.css"


const Cart = (prop) => {

  console.log(prop.cartArray)

  return (
    <div className="cart">
      <Link to="/account"><button className="cart__btn">Order Now</button></Link>
      
      <div className="cart__items">
        {prop.cartArray.map((product, index)=>(<Product key={index} imageURL={product.imageURL} name={product.name} price={product.price} key={index} assured={product.companyAssured} isNew={product.isNewProduct}/>))}
      </div>
      
    </div>
  )
}

const mapStateToProps = state => {
  return{
    cartArray: state.cart.cartArray
  }
}


export default connect(mapStateToProps)(Cart) 
