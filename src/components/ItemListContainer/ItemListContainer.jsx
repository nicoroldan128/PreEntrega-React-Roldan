import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "./ItemList/ItemList"
import { Loading } from "../Loading/Loading";

import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'

import './itemListContainer.css'


const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const {categoryId} = useParams()

  const getDocuments = (query) =>{
    getDocs(query)
    .then(result => setProducts(result.docs.map(product =>({id: product.id, ...product.data()}))))
    .catch((err) => console.log(err))
    .finally(()=> setLoading(false))
  }

    useEffect(() => {
      const dbFirestore = getFirestore()
      const queryCollection = collection(dbFirestore, 'productos')

      if(categoryId){
        const queryFilter = query(queryCollection, where('category', '==', categoryId))
        getDocuments(queryFilter)

      }else{
        getDocuments(queryCollection)
      }

    }, [categoryId])

  return (
    <>
      <h2 className="text-start mt-3 p-3">{greeting} {categoryId}</h2>
      {
        loading ? <Loading />
                : <div className="items-container">
                  {products.length === 0 ? 
                    <h2>No se encontraron productos</h2>
                  :
                    <ItemList products={products}/>
                  }
                  </div>
      } 
    </>
  )
}

export default ItemListContainer

