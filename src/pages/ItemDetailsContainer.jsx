import React from 'react';
import { useParams } from 'react-router-dom';
import { useProductById } from '../hooks/useProductById';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';

const ItemDetailsContainer = () => {
  
  const {id} = useParams ()
  const {product} = useProductById (id)
  
  return (
    <>
      <ItemDetailContainer product={product}/>
    </>
  )
}

export default ItemDetailsContainer