import { useReducer } from "react";

const CartContext = React.createContext();

const initialState = {};
const reducer = () => {};

function CartProvider({children}) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <CartContext.Provider value={state} >{children}</CartContext.Provider>;
}

export default CartProvider;
