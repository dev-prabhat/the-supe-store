import { Navigation } from './components/index'
import { Routes, Route } from "react-router-dom"
import { Home, Product, Cart } from "./pages/index"


function App() {
  return (
    <div >
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
