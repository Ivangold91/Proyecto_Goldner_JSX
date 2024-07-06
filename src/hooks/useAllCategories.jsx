import React from 'react'
import { getAllCategories } from '../services/productsServices';

export const useAllCategories = () => {
  
  const [categories, setCategories] = React.useState ([]);

  React.useEffect ( () => {

    getAllCategories().then((res) => {setCategories(res.data)}).catch((e) => console.error(e))
  } , []);

  
    return {categories}
}