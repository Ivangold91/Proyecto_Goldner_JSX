import React from 'react'
import { getProductsByCategory } from '../services/productsServices'

export const useProductsByCategory = (category) => {
  
  const [products, setProducts] = React.useState ([])

  React.useEffect ( () => {

    getProductsByCategory(category).then((res) => {setProducts(res.data.products)}).catch((e) => {console.error(e)})

  }, [category]  )
   
  
  
    return {products}
}

