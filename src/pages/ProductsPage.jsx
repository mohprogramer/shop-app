import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../context/ProductContext";
//Icons
import { ImSearch } from "react-icons/im";
import { FaListUl } from "react-icons/fa";
//components
import Card from "../components/Card";
//helpers
import {
  categoryProducts,
  createQueryObject,
  getInitialQuery,
  searchProducts,
} from "../helper/helper";
//Loader
import Loader from "../components/Loader";
//styles
import styles from "./ProductsPage.module.css";

function ProductsPage() {
  const products = useProducts();
  const [displayed, setDisplayed] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState({});

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setDisplayed(products);
    setQuery(getInitialQuery(searchParams))
  }, [products]);

  useEffect(() => {
    setSearchParams(query);
    setSearch(query.search || "")
    let filteredProducts = searchProducts(products, query.search);
    filteredProducts = categoryProducts(filteredProducts, query.category);
    setDisplayed(filteredProducts);
    console.log(filteredProducts);
  }, [query]);

  const searchHandler = () => {
    setQuery((query) => createQueryObject(query, { search }));
  };

  const categoryHandler = (e) => {
    const { tagName } = e.target;
    const category = e.target.innerText.toLowerCase();

    if (tagName != "LI") return;
    setQuery((query) => createQueryObject(query, { category }));
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
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
