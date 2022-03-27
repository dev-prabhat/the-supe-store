import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom"
import App from './App';
import { CartProvider } from './Context/Cart-Context';
import { FilterProvider } from './Context/Filter-Context';
import { WishlistProvider } from './Context/Wishlist-Context';
import { ProductProvider } from "./Context/Product-Context"
import reportWebVitals from './reportWebVitals';
import { makeServer } from "./server"


makeServer()
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductProvider>
        <FilterProvider>
          <CartProvider>
            <WishlistProvider>
              <App />
            </WishlistProvider>
          </CartProvider>
        </FilterProvider>
      </ProductProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
