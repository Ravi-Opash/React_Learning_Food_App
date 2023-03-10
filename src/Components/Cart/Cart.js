import Button from "../UI/Button";
import style from "./Cart.module.css";
import CartContext from "../../store/CartContext";
import { useContext } from "react";
import CartItems from "./CartItems";

const Cart = (props) => {

    const ctx = useContext(CartContext);
    const lists = ctx.items;

  const onOrder = () => {
    console.log('Ordering....!');
  };

  return (
    <div className={style.main_cart_box}>
      <div className={style.cart_list}>
      {lists.map((item, idx) => (
        <CartItems
          key={idx}
          name={item.name}
          price={item.price}
          count={item.count}
          id={item.key}
        />
      ))} 
      </div>
      <div className={style.cart_amount}>
        <h2 className={style.msg}>Total Amount</h2>
        <h2 className={style.totalAmount}>${ctx.totalAmount}</h2>
      </div>
      <div className={style.cart_btns}>
        <Button className={style.close_btn} onClick={props.onHideCart}>
          Close
        </Button>
        <Button className={style.order_btn} onClick={onOrder}>
          Order
        </Button>
      </div>
    </div>
  );
};

export default Cart;
