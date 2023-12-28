import { createQueryObject } from "../helper/helper";
import { FaListUl } from "react-icons/fa";

//styles
import styles from "./SideBar.module.css";

function SideBar({ setQuery }) {
  const categoryHandler = (e) => {
    const { tagName } = e.target;
    const category = e.target.innerText.toLowerCase();

    if (tagName != "LI") return;
    setQuery((query) => createQueryObject(query, { category }));
  };

  return (
    <div className={styles.sidebar} >
      <div>
        <FaListUl />
        <p>Caregories</p>
      </div>
      <ul onClick={categoryHandler}>
        <li>All</li>
        <li>Electronics</li>
        <li>Jewelery</li>
        <li>Men's Clothing</li>
        <li>Women's Clothing</li>
      </ul>
    </div>
  );
}

export default SideBar;
