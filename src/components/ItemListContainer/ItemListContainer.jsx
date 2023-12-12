import { useEffect, useState } from "react";
import { ItemList } from "./ItemList/ItemList"
// import { task } from "../../helpers/task";
import './ItemListContainer.css'
import { useParams } from "react-router-dom";
import { Loading } from "../Loading/Loading";

import { collection, getDocs, getFirestore, query } from 'firebase/firestore'

const ItemListContainer = ({greeting}) => {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)

  const {categoriaId} = useParams()

    useEffect(() => {
    const dbFirestore = getFirestore()
    const queryCollection = collection(dbFirestore, 'productos')

    if(categoriaId){
      const queryFilter = query(queryCollection, where('category','==',categoriaId))

      getDocs(queryFilter)
      .then((result) => setProductos(result.docs.map(producto =>({id: producto.id, ...producto.data()}))))
      .catch((err) => console.log(err))
      .finally(()=> setLoading(false))

    }else{
      getDocs(queryCollection)
      .then(resultado => setProductos(resultado.docs.map(producto => ({id: producto.id, ...producto.data()}))))
      .catch(error => console.log(error))
      .finally(()=> setLoading(false))
    }
  }, [categoriaId])

  return (
    <>
      <h2 className="text-center mt-3">{greeting}</h2>
      {
        loading ? <Loading />
                : <div className="items-container">
                   <ItemList productos={productos}/>
                  </div>
      } 
    </>
  )
}

export default ItemListContainer

