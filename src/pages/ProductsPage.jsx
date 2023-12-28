import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../context/ProductContext";
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
import SearchBox from "../components/SearchBox";
import SideBar from "../components/SideBar";

function ProductsPage() {
  const products = useProducts();
  const [displayed, setDisplayed] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState({});

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setDisplayed(products);
    setQuery(getInitialQuery(searchParams));
  }, [products]);

  useEffect(() => {
    setSearchParams(query);
    setSearch(query.search || "");
    let filteredProducts = searchProducts(products, query.search);
    filteredProducts = categoryProducts(filteredProducts, query.category);
    setDisplayed(filteredProducts);
    console.log(filteredProducts);
  }, [query]);

  return (
    <>
      <SearchBox search={search} setSearch={setSearch} setQuery={setQuery} />
      <div className={styles.container}>
        <div className={styles.products}>
          {!displayed.length && <Loader></Loader>}

          {displayed.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
        <SideBar setQuery={setQuery} />
      </div>
    </>
  );
}

export default ProductsPage;
