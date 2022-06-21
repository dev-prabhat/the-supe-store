import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom"
import App from './App';
import { 
  CartProvider, 
  FilterProvider, 
  WishlistProvider, 
  CategoryProvider, 
  AuthProvider, 
  ModalProvider, 
  AddressProvider} from "./Context"
import { makeServer } from "./server"


makeServer()
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <AddressProvider>
          <ModalProvider>
            <CategoryProvider>
              <FilterProvider>
                <CartProvider>
                  <WishlistProvider>
                    <App />
                  </WishlistProvider>
                </CartProvider>
              </FilterProvider>
            </CategoryProvider>
          </ModalProvider>
        </AddressProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

