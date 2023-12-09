import { useCartContext } from '../../contexts/CartContext'
import "./cartContainer.css"
export const CartContainer = () => {
  const {cartList, vaciarCarrito} = useCartContext()

  return (
    // realizar los detalles 
    <div className='cart-list'>
      <h1>Carrito de compras</h1>
      {cartList.map(product => <div className='card-cart' key={product.id}>
                                <img className="card-img-cart" src={`../src/assets/img/${product.imgUrl}`} alt="imagen producto" /> 
                                Cantidad: {product.cantidad} - Precio Unidad: {product.price} - subTotal: 
                              </div>  
      )}
      <button className='btn btn-danger' onClick={vaciarCarrito}>Vaciar Carrito</button>
    </div>
  )
}
