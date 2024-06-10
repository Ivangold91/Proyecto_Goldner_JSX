import React from 'react'
import { useParams } from 'react-router-dom'
import { useProductById } from '../hooks/useProductById';

const ItemDetailsContainer = () => {
  
  const {id} = useParams ()
  const {product} = useProductById (id)
  
  return (
    <>
      <ItemDetailsContainer product={product}/>
    </>
  )
}

export default ItemDetailsContainer