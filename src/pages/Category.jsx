import React from 'react'

import { useProductsByCategory } from '../hooks/useProductsByCategory';
import { useParams } from 'react-router-dom'

import ItemListContainerComponent from '../components/ItemListContainerComponent/ItemListContainerComponent';


const Category = () => {
  
  const {id} = useParams();
  const {products} = useProductsByCategory(id)
  
  return (
    <>
      <ItemListContainerComponent products={products}   />
    </>
  )
}

export default Category