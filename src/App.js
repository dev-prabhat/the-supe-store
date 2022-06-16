import { Navigation , PrivateRoute} from './components/index'
import { Routes, Route } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import { Home, Product, Cart, Wishlist, Mock, SignUp, Login, Page404 } from "./pages/index"
import 'react-toastify/dist/ReactToastify.css';
import { AuthRoute } from './components/AuthRoute';



function App() {
  return (
    <>
      <Navigation />
      <ToastContainer position="bottom-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />

         <Route element={<PrivateRoute/>}>
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
         </Route>
        
         <Route element={<AuthRoute/>}>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
         </Route>
        
        <Route path="/mock" element={<Mock />} />
        <Route path="*" element={<Page404/>} />
      </Routes>
    </>
  );
}

export default App;
