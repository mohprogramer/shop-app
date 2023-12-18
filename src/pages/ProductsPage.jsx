import { useProducts } from "../context/ProductContext";
//styles
import styles from "./ProductsPage.module.css";
//components
import Card from "../components/Card";
//Loader
import Loader from "../components/Loader";

function ProductsPage() {
  const products = useProducts();
  return (
    <div className={styles.container}>
      <div className={styles.products}>
        {!products.length && <Loader></Loader>}

        {products.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
      <div>sidebar</div>
    </div>
  );
}

export default ProductsPage;
