import './ItemDetail.css'

import { ItemCounter } from '../../ItemCounter/ItemCounter'
import { useCartContext } from '../../../contexts/CartContext'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export const ItemDetail = ({product}) => {
  const { addProduct } = useCartContext()
  const [isCounter, setIsCounter] = useState(true)

  const onAdd = (cantidad) =>{
    addProduct({...product, cantidad})
    setIsCounter(false)
  }

  return (
      <div className='detalle-producto'>
                <img src={`../src/assets/img/${product.imgUrl}`} className="img-producto" alt="imagen" />
                <div>
                  <h4>{product.name}</h4>
                  <h4>${product.price}</h4>
                  <p className='descripcion'>{product.description}</p>
                  {
                    isCounter ?
                      <ItemCounter onAdd={onAdd} initial={1} stock={product.stock} />
                    :
                    <>
                      <Link to="/cart" >Terminar comprando</Link>
                      <Link to="/" >Seguir comprando</Link>
                    </>
                  }
                </div>
      </div>
  )
}
