
import './App.css';
import Header from './component/header/Header';
import Home from './pages/home/Home';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Favorite from './pages/favorite/Favorite';
import { Provider } from 'react-redux';
import store from './redux/store';
import Cart from './pages/cart/Cart';
import Account from './pages/account/Account';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <Switch>

            <Route path="/favorite">
              <Header/>
              <Favorite/>
            </Route>

            <Route path="/account">
              <Header/>
              <Account/>
            </Route>

            <Route path="/cart">
              <Header/>
              <Cart/>
            </Route>

            <Route path="/">
              <Header/>
              <Home/>
            </Route>
            
          </Switch>
        </div> 
      </Router>  
    </Provider>
    
    
  );
}

export default App;
