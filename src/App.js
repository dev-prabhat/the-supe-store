import { Navigation } from './components/index'
import { Routes, Route } from "react-router-dom"
import { Home, Product, Cart, Wishlist, Mock, SignUp, Login } from "./pages/index"


function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mock" element={<Mock />} />
      </Routes>
    </>
  );
}

export default App;
