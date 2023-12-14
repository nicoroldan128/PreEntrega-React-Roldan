import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../contexts/CartContext'

import "./cartContainer.css"
import { Formulario } from './Formulario/Formulario'
import { ItemCart } from './ItemCart/ItemCart'

export const CartContainer =  () => {
  const {cartList, emptyCart, totalPurchase} = useCartContext()
  const [isId, setIsId] = useState('')

  return (
    <div className='cart-list'>
      <h1 className='titulo-carrito'>Carrito de compras</h1>
        {
          totalPurchase() === 0 ? 
            <div className='msg-empty'>
              <div>
                <p>No hay productos en carrito</p>
                <Link className='link-home' to={'/'}>Regresar a Home</Link>
              </div>
            </div>
          :            
            <>
              {isId != '' && <h2>La orden de compra es {isId} </h2>}

              {cartList.map(product =>
                      <ItemCart  key={product.id} product={product}/>
              )}
              <div className='container-detalle'>
                <p className='text-total-compra'>Precio total compra:  ${totalPurchase()}</p>
                <button className='btn btn-danger ' onClick={emptyCart}>Vaciar Carrito</button>
              </div>

              <Formulario />
              
            </>
        }
    </div>
  )
}
