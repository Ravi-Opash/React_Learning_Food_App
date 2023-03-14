import React from "react";

const CartContext = React.createContext({
  items: [],
  totalOrder : 0,
  addItem: (item) => {},
  addItemInCart: (item) => {},
  removeItem: (item) => {},
  clearCart: () => {}
});

export default CartContext;