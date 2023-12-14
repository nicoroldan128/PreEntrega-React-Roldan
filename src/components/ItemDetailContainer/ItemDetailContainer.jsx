import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ItemDetail } from './ItemDetail/ItemDetail';
import { Loading } from '../Loading/Loading';
import { doc, getDoc, getFirestore } from 'firebase/firestore';

export const ItemDetailContainer = () => {
  const [product, setProducto] = useState({})
  const [loading, setLoading] = useState(true)

  const {pid} = useParams()

  useEffect(() => {
    const dbFirestore = getFirestore()

    const queryDoc = doc(dbFirestore, 'productos', pid)
    getDoc(queryDoc)
    .then(resultado => setProducto( { id: resultado.id, ...resultado.data() } ))
    .catch(error => console.log(error))
    .finally(()=> setLoading(false))
  },[])

  return (
    <>
      <h2 className='text-center'>Detalle del producto</h2>
      {
      loading ? <Loading />
              : <ItemDetail product = {product} />   
      }
    </>

  )
}
