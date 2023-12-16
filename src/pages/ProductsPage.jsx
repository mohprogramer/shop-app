import { useProducts } from "../context/ProductContext";

function ProductsPage() {
  const products = useProducts();
  return (
    <div>
      <div>{products.map(item => (
        <p key={item.id} >{item.title}</p>
      ))}</div>
      <div>sidebar</div>
    </div>
  );
}

export default ProductsPage;
