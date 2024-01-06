import { shortenText } from "../helper/helper";
//Icons
import { MdDeleteOutline } from "react-icons/md";
//styles
import styles from './BasketCard.module.css'


function BasketCard({ data, clickHandler }) {
  const { image, title, quantity } = data;
  return (
    <div className={styles.card} >
      <img src={image} alt={title} />
      <p>{shortenText(title)}</p>
      <div className={styles.action} >
        {quantity === 1 && (
          <button onClick={() => clickHandler("REMOVE_ITEM", data)}>
            <MdDeleteOutline />
          </button>
        )}
        {quantity > 1 && (
          <button onClick={() => clickHandler("DECREASE", data)}>-</button>
        )}
        <span>{quantity}</span>
        <button onClick={() => clickHandler("INCREASE", data)}>+</button>
      </div>
    </div>
  );
}

export default BasketCard;
