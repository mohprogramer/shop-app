import { useEffect, useState } from "react";
import { useProducts } from "../context/ProductContext";
//Icons
import { ImSearch } from "react-icons/im";
import { FaListUl } from "react-icons/fa";
//styles
import styles from "./ProductsPage.module.css";
//components
import Card from "../components/Card";
//Loader
import Loader from "../components/Loader";

function ProductsPage() {
  const products = useProducts();
  const [displayed, setDisplayed] = useState([]);
  const [search, setSrearch] = useState("");

  useEffect(() => {
    setDisplayed(products);
  }, [products]);

  const searchHandler = () => {
    console.log("search");
  };

  const categoryHandler = (e) => {
    const { tagName } = e.target;
    const category = e.target.innerText.toLowerCase();

    if (tagName != "LI") return;
    console.log(category);
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSrearch(e.target.value.toLowerCase().trim())}
        />
        <button onClick={searchHandler}>
          <ImSearch />
        </button>
      </div>
      <div className={styles.container}>
        <div className={styles.products}>
          {!displayed.length && <Loader></Loader>}

          {displayed.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
        <div>
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
      </div>
    </>
  );
}

export default ProductsPage;
