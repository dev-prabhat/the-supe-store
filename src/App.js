import { Navigation } from './components/index'
import { Routes, Route } from "react-router-dom"
import { Home, Product, Cart, Wishlist } from "./pages/index"


function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </>
  );
}

export default App;
