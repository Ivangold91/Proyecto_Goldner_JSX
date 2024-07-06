import React from "react"

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import MainRoutes from "./routes/MainRoutes";
import { CartProvider } from "./context/CartContext";


const App = () => {
 
  return (
    <CartProvider>
      
          <MainRoutes/>
      
    </CartProvider>
  )
}

export default App
