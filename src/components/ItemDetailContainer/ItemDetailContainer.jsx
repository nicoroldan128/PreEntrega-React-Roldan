import React, { useEffect, useState } from 'react'
import { task } from "../../helpers/task";
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

export const ItemDetailContainer = () => {
  const [product, setProductos] = useState({})

  const {pid} = useParams()

  useEffect(() => {
    task(parseInt(pid))
      .then((result) => setProductos(result))
      .catch((err) => console.log(err));
  }, [])

  return (
    <>
      <h2 className='text-center'>Detalle del producto</h2>
      <ItemDetail product = {product} />
    </>
  )
}
