import { createQueryObject } from "../helper/helper";
import { FaListUl } from "react-icons/fa";

//constants
import { categories } from "../constants/list";
//styles
import styles from "./SideBar.module.css";


function SideBar({ setQuery, query }) {
  const categoryHandler = (e) => {
    const { tagName } = e.target;
    const category = e.target.innerText.toLowerCase();

    if (tagName != "LI") return;
    setQuery((query) => createQueryObject(query, { category }));
  };

  return (
    <div className={styles.sidebar}>
      <div>
        <FaListUl />
        <p>Caregories</p>
      </div>
      <ul onClick={categoryHandler}>
        {categories.map((item) => (
          <li
            className={
              item.type.toLowerCase() === query.category
                ? styles.selected
                : null
            }
            key={item.id}
          >
            {item.type}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
