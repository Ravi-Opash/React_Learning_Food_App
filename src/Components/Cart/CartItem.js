import style from './CartItem.module.css';
import CartContext from '../../store/CartContext';
import { useContext } from 'react';

const CartItems = (props) => {

  const ctx = useContext(CartContext);

  const onPluse = () => {
    ctx.addItem(props)
  }

  const onRemove = () => {
    ctx.removeItem(props)
  }

  return (
    <li className={style['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={style.summary}>
          <span className={style.price}>{props.price}</span>
          <span className={style.amount}>x {props.count}</span>
        </div>
      </div>
      <div className={style.actions}>
        <button onClick={onRemove}>−</button>
        <button onClick={onPluse}>+</button>
      </div>
    </li>
  );
};

export default CartItems;
