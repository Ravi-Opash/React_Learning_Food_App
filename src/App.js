import style from './App.module.css';
import Header from './Components/Header/Header';
import ListItems from './Components/ListItems/ListItems';
import Cart from './Components/Cart/Cart';
import { useState } from 'react';
import CartProvider from './store/CartProvider';

function App() {

  // const ctx = useContext(CartProvider)
  // console.log(ctx)

  const [cartIsSHown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true)
  }

  const hideCartHandler = () => {
    setCartIsShown(false)
  }


  return (
    <CartProvider>
    <div className="App">
      {cartIsSHown && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler}  />
      <div className={style.foodInfo}>
        <h2>Food Order</h2>
        <p>Chosse your favorite meal from our broad selection of available meals and enjoy a delicious luch or dinner at home.</p>
        <p>All our meal cooked with hgh quality ingredients, just in time and of course by experienced chefs! </p>
      </div>
      <ListItems />
    </div>
    </CartProvider>
  );
}

export default App;
