import { Navigation } from './components/index'
import { Routes, Route } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import { Home, Product, Cart, Wishlist, Mock, SignUp, Login } from "./pages/index"
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <>
      <Navigation />
      <ToastContainer position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover />
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
