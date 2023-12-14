import React,{ memo } from "react"
import { useCartContext } from "../../../contexts/CartContext"

import './itemCart.css'

export const ItemCart = memo(({ product }) => {

    const {deleteProduct} = useCartContext()

    return(
        <>
            <div className='card-cart' key={product.id}>
                <img className="card-img-cart"src={`../src/assets/img/${product.imgUrl}`} alt="imagen producto" /> 
                <div className='card-detail'>
                    <div>
                        <p className=''>Cantidad</p>
                        <p>{product.cantidad}</p>
                    </div>
                    <div>
                        <p>Precio Unidad</p>
                        <p>${product.price}</p>
                    </div>
                    <div>
                        <p>SubTotal</p>
                        <p>${product.cantidad * product.price}</p>
                    </div>
                </div>
                <button className='btn-eliminar-producto' onClick={() => deleteProduct(product.id)}>Eliminar</button>          
            </div>  
        </>
    )
})
