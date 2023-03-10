import { useReducer } from "react";
import CartContext from "./CartContext";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

var updateItem;
var updatedTotalAmount;
// var existingCartItem;

const cartReducer = (state, action) => {
  console.log(action.item);
  if (action.type === "ADD") {
    const index = state.items.findIndex((item) => item.key === action.item.id);
    console.log(index);

    if(index=== -1){
      updateItem = state.items.concat(action.item);
        updatedTotalAmount =
          state.totalAmount + action.item.price * action.item.count;
        return {
          items: updateItem,
          totalAmount: updatedTotalAmount,
        };
    }

    for (let i of state.items) {
      if (i.key === action.item.id) {
        const existingCartItem = state.items[index];
        let updateItem;
        let updateItems;

        if (existingCartItem) {
          console.log("ff");
          updateItem = {
            ...existingCartItem,
            count: existingCartItem.count + action.item.count,
          };
          updateItems = [...state.items];
          updateItems[index] = updateItem;
        }
      } else {
        updateItem = state.items.concat(action.item);
        updatedTotalAmount =
          state.totalAmount + action.item.price * action.item.count;
        return {
          items: updateItem,
          totalAmount: updatedTotalAmount,
        };
      }
    }
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

  const removeItemToCartHanddler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
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

// for (let i of state.items) {
//   if (i.key === action.item.key) {
//     state.items.count = state.items.count + action.item.count;
//     updatedTotalAmount =
//       state.totalAmount + action.item.price * action.item.count;
//     return {
//       items: updateItem,
//       totalAmount: updatedTotalAmount,
//     };
//   }
// }
