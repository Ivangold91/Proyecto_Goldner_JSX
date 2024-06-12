import React from 'react';
import { getAllProducts } from '../services/productsServices';

export const useProducts = () => {

    const [products, setProducts] = React.useState ([])

    React.useEffect ( () => {
        getAllProducts().then((res) => { setProducts (res.data.products)}).catch( (e) => {console.error(e)});
    },[]);

  return {products}
  
}

