import { useProducts } from "../context/ProductContext";

function ProductsPage() {
  console.log(useProducts())
  return <div>rpo</div>;
}

export default ProductsPage;
