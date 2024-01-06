import { useCart } from "../context/CartContext";
import BasketCard from "../components/BasketCard";

function CheckoutPage() {
  const [state, dispatch] = useCart();

  const clickHandler = (type, payload) => dispatch({ type, payload });

  return (
    <div>
      <div>
        {state.selectedItems.map((item) => (
          <BasketCard key={item.id} data={item} clickHandler={clickHandler} />
        ))}
      </div>
    </div>
  );
}

export default CheckoutPage;
