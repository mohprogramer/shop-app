import { Link } from "react-router-dom";
//Icons
import { TbListDetails } from "react-icons/tb";
import { TbShoppingBagCheck } from "react-icons/tb";
//helpers
import { shortenText } from "../helper/helper";
//styles
import styles from "./Card.module.css";
import { useCart } from "../context/CartContext";

function Card({ data }) {
  const { id, image, title, price } = data;
  const [state, dispatch] = useCart();

  const clickHandler = () => {
    dispatch({ type: "add", payload: data });
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
          <button onClick={clickHandler}>
            <TbShoppingBagCheck />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
