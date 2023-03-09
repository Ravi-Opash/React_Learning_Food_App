import Button from "../UI/Button";
import style from "./Cart.module.css";

const Cart = () => {
  return (
    <div className={style.main_cart_box}>
      <div className={style.cart_list}></div>
      <div className={style.cart_amount}>
        <h2 classname={style.msg}>Total Amount</h2>
        <h2 className={style.totalAmount}>$90.00</h2>
      </div>
      <div className={style.cart_btns}>
        <Button className={style.close_btn}>Close</Button>
        <Button className={style.order_btn}>Order</Button>
      </div>
    </div>
  );
};

export default Cart;
