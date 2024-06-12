import React from 'react';
import {getProductById} from "../services/productsServices";

export const useProductById = (id) => {
  
    const [product, setProduct] = React.useState ([])

    React.useEffect ( () => {
        getProductById (id).then((res) => {setProduct(res.data)}).catch((e) => console.error(e))
    },[]);
  
  return {product}
}

