import style from './App.module.css';
import Header from './Components/Header/Header';
import ListItems from './Components/ListItems/ListItems';
import Cart from './Components/Cart/Cart';

function App() {
  return (
    <div className="App">
      <Cart />
      <Header />
      <div className={style.foodInfo}>
        <h2>Food Order</h2>
        <p>Chosse your favorite meal from our broad selection of available meals and enjoy a delicious luch or dinner at home.</p>
        <p>All our meal cooked with hgh quality ingredients, just in time and of course by experienced chefs! </p>
      </div>
      <ListItems />
    </div>
  );
}

export default App;
