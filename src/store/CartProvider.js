import { useReducer } from "react";
import CartContext from "./CartContext";

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    if(action.type === 'ADD'){
        const updateItem = state.items.concat(action.item);
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        return {
            items: updateItem,
            totalAmount: updatedTotalAmount,
        }
    }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

//   console.log(defaultCartState)
  console.log(cartState);

  const addItemToCartHanddler = (item) => {
    dispatchCartAction({type: 'ADD', item: item})
  };

  const removeItemToCartHanddler = (id) => {
    dispatchCartAction({type: 'REMOVE', id: id})
  };

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHanddler,
    removeItem: removeItemToCartHanddler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
