import './ItemDetail.css'

import { ItemCounter } from '../ItemCounter/ItemCounter'
import { useCartContext } from '../../contexts/CartContext'

export const ItemDetail = ({product}) => {
  const { addProduct } = useCartContext()

  const onAdd = (cantidad) =>{
    addProduct({...product, cantidad})
  }

  return (
      <div className='detalle-producto'>
                <img src={`../src/assets/img/${product.imgUrl}`} className="img-producto" alt="imagen" />
                <div>
                  <h4>{product.name}</h4>
                  <h4>${product.price}</h4>
                  <p className='descripcion'>{product.description}</p>
                  <ItemCounter onAdd={onAdd} initial={1} stock={product.stock} />
                </div>
      </div>
  )
}
