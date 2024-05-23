import React from "react"
import NavBarComponent from "./components/NavBarComponent/NavBarComponent"
import ItemListContainerComponent from "./components/ItemListContainerComponent/ItemListContainerComponent"

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


const App = () => {
 
  return (
    <>
      <NavBarComponent/>
      <ItemListContainerComponent greeting="Hola Bienvenidos!"/>
    </>
  )
}

export default App
