import Home from "./pages/Home"
import { Navigation } from './components/index'
import { Routes, Route } from "react-router-dom"
import Product from "./pages/Product";


function App() {
  return (
    <div >
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
