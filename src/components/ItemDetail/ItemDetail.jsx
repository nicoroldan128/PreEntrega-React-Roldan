import React from 'react'
import './ItemDetail.css'
import { ItemCounter } from '../ItemCounter/ItemCounter'

export const ItemDetail = ({product}) => {
  return (
      <div className='detalle-producto'>
                <img src={`../src/assets/img/${product.imgUrl}`} className="img-producto" alt="imagen" />
                <div>
                  <h4>{product.name}</h4>
                  <h4>{product.price}</h4>
                  <p className='descripcion'>{product.description}</p>
                  <ItemCounter initial={1} stock={product.stock} />
                </div>
      </div>
  )
}
