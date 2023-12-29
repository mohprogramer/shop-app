import { Navigate, Route, Routes } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import DetailsPage from "./pages/DetailsPage";
import CheckoutPage from "./pages/CheckoutPage";
import PageNotFound from "./pages/404";
import ProductProvirder from "./context/ProductContext";
import CartProvider from "./context/CartContext";

function App() {
  return (
    <ProductProvirder>
      <CartProvider>
        <Routes>
          <Route index element={<Navigate to={"/products"} replace />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<DetailsPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </CartProvider>
    </ProductProvirder>
  );
}

export default App;
