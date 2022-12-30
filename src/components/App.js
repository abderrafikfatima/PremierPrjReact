
import Banner from './Banner';
import Cart from './Cart';
import ShoppingList from './ShoppingList';
import logo from '../assets/logo.png';
import Footer from './Footer';
import '../styles/Layout.css';
import { useState } from 'react';


function App() {

    const [cart,updateCart]= useState([])
    const [isFooterShown,updateIsFooterShown]=useState(true)
    return (
    <div>
      <Banner>
          <img src={logo} alt='La maison jungle' className='logo-banner' />
          <h1 className='lmj-title'>La maison jungle</h1>
      </Banner>
      <div className='layout-inner'>
          <Cart cart={cart} updateCart={updateCart}/>
          <ShoppingList cart={cart} updateCart={updateCart} />
      </div>
      <button className='button-cache' onClick={() =>updateIsFooterShown(!isFooterShown)}>Cacher!</button>
      {isFooterShown && <Footer cart={cart} />} 
  </div>
)
}

export default App;
