import React, { useEffect, useState } from 'react'
import { task } from "../../helpers/task";
import { useParams } from 'react-router-dom';
import { ItemDetail } from './ItemDetail/ItemDetail';
import { Loading } from '../Loading/Loading';

export const ItemDetailContainer = () => {
  const [product, setProductos] = useState({})
  const [loading, setLoading] = useState(true)

  const {pid} = useParams()

  useEffect(() => {
    task(parseInt(pid))
      .then((result) => setProductos(result))
      .catch((err) => console.log(err))
      .finally(()=> setLoading(false))
  }, [])

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
