import Button from "../UI/Button";
import style from "./Cart.module.css";
// import CartContext from "../../store/CartContext";
// import { useContext } from "react";

const Cart = (props) => {

    // const ctx = useContext(CartContext);

  const onOrder = () => {
    console.log('Ordering....!');
  };
  return (
    <div className={style.main_cart_box}>
      <div className={style.cart_list}>

      </div>
      <div className={style.cart_amount}>
        <h2 className={style.msg}>Total Amount</h2>
        <h2 className={style.totalAmount}>$90.00</h2>
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
