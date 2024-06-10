import React from 'react';
import {getProductById} from "../services/productsServices";

export const useProductById = () => {
  
    const [product, setProduct] = React.useState ([])

    React.useEffect ( () => {
        getProductById ().then((res) => {setProduct(res.data)}).catch((e) => console.log(e))
    },[]);
  
  return {product}
}

