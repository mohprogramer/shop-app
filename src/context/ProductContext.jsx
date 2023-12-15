import { useEffect, useState } from "react";
import api from "../services/config";

export const ProductContext = React.createContext();

function ProductProvirder({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setProducts(await api.get("/products"));
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchProducts();
  }, []);

  return <ProductContext.Provider value={products} >{children}</ProductContext>;
}

export default ProductProvirder;
