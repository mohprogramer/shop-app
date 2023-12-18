import { useProducts } from "../context/ProductContext";
//Icons
import { ImSearch } from "react-icons/im";
//styles
import styles from "./ProductsPage.module.css";
//components
import Card from "../components/Card";
//Loader
import Loader from "../components/Loader";
import { useState } from "react";

function ProductsPage() {
  const products = useProducts();
  const [search, setSrearch] = useState("");

  const searchHandler = () => {
    console.log("search");
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
          {!products.length && <Loader></Loader>}

          {products.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
        <div>sidebar</div>
      </div>
    </>
  );
}

export default ProductsPage;
