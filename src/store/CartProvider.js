import { useReducer } from "react";
import CartContext from "./CartContext";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

var updateItem;
var updatedTotalAmount;

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const index = state.items.findIndex((item) => item.key === action.item.id);

    if (index === -1) {
      updateItem = state.items.concat(action.item);
      updatedTotalAmount =
        state.totalAmount + action.item.price * action.item.count;
      return {
        items: updateItem,
        totalAmount: +`${updatedTotalAmount.toFixed(2)}`,
      };
    }

    if (index >= 0) {
      updateItem = state.items;
      state.items[index].count++;
      updatedTotalAmount = state.totalAmount + action.item.price;
      return {
        items: updateItem,
        totalAmount: +`${updatedTotalAmount.toFixed(2)}`,
      };
    }
  }

  if (action.type === "REMOVE") {
    const index = state.items.findIndex((item) => item.key === action.item.id);
    updateItem = state.items;
    if(state.items[index].count<=1){
      state.items.splice(index, 1);
    }
    else{
      state.items[index].count--;
    }

    updatedTotalAmount = state.totalAmount - action.item.price;
    return {
      items: updateItem,
      totalAmount: +`${updatedTotalAmount.toFixed(2)}`,
    };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHanddler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemToCartHanddler = (item) => {
    dispatchCartAction({ type: "REMOVE", item: item });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
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
