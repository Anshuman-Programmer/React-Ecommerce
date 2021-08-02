
import "./Header.css"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Header = (prop) => {


  return (
    <div className="header">
      <img className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="logo"/>
      <ul className="header__links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/favorite">My Favorites</Link></li>
        <li><Link to="/cart">My Cart</Link></li>
        <li><Link to="/account">My Account</Link></li>
      </ul>
      <Link to="/cart"><div className="header__cart">
        <p>{prop.cartArray.length}</p>
        <ShoppingCartIcon/>
      </div>
      </Link>
      

    </div>
  )
}

const mapStateToProps = state => {
  return{
    cartArray: state.cart.cartArray
  }
}


export default connect(mapStateToProps)(Header)
