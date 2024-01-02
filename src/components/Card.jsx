import { Link } from "react-router-dom";
//Icons
import { TbListDetails } from "react-icons/tb";
import { TbShoppingBagCheck } from "react-icons/tb";
import { MdDeleteOutline } from "react-icons/md";
//helpers
import { shortenText } from "../helper/helper";
//styles
import styles from "./Card.module.css";
import { useCart } from "../context/CartContext";

function Card({ data }) {
  const { id, image, title, price } = data;
  const [state, dispatch] = useCart();
  console.log(state);
  const clickHandler = (type) => {
    dispatch({ type, payload: data });
  };

  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <h3>{shortenText(title)}</h3>
      <p> ${price}</p>
      <div className={styles.actions}>
        <Link to={`/products/${id}`}>
          <TbListDetails />
        </Link>
        <div>
          <button onClick={() => clickHandler("ADD_ITEM")}>
            <TbShoppingBagCheck />
          </button>
          <button onClick={() => clickHandler("REMOVE_ITEM")}>
            <MdDeleteOutline />
          </button>
          <button onClick={() => clickHandler("INCREASE")}>+</button>
          <button onClick={() => clickHandler("DECREASE")}>-</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
