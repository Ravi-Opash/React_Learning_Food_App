import Button from "../UI/Button";
import style from "./Cart.module.css";
import CartContext from "../../store/CartContext";
import { useContext, useState } from "react";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
  const [isCheckout, setCheckout] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isOrderSent, setIsOrderSent] = useState(false);

  const ctx = useContext(CartContext);
  const lists = ctx.items;

  const onOrder = () => {
    setCheckout(true);
  };

  const submitOrder = (userData) => {
    setIsSending(true);
    fetch("https://react-http-89c52-default-rtdb.firebaseio.com/order.json", {
      method: "POST",
      body: JSON.stringify({
        user: userData,
        orderItems: ctx.items,
      }),
    });
    setIsOrderSent(true);
    setIsSending(false);
    ctx.clearCart();
  };

  const myModelActions = (
    <div className={style.cart_btns}>
      <Button className={style.close_btn} onClick={props.onHideCart}>
        Close
      </Button>
      <Button className={style.order_btn} onClick={onOrder}>
        Order
      </Button>
    </div>
  );

 

  const wholeCart = (
    <>
      <div className={style.cart_list}>
        {lists.map((item, idx) => (
          <CartItem
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
      {isCheckout && (
        <Checkout onConfirm={submitOrder} onCancel={props.onHideCart} />
      )}
      {!isCheckout && myModelActions}
    </>
  );

  const SuccessOrder = (
    <div className={style.success_order_box}>
      <p className={style.order}>Order SuccessFully Sent</p>
      <Button className={style.close_btn_order} onClick={props.onHideCart}>
        Close
      </Button>
    </div>
  );

  return (
    <div className={style.outerest_class}>
      <div className={style.main_cart_box}>
        {isSending && !isOrderSent && (
          <p className={style.order}>Sending Order....!</p>
        )}
        {isOrderSent && !isSending && SuccessOrder}
        {!isSending && !isOrderSent && wholeCart}
      </div>
    </div>
  );
};

export default Cart;
