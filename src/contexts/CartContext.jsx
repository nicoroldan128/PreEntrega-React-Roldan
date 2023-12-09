import { createContext, useState, useContext } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([])

    const addProduct = (product) =>{
        setCartList([
            ...cartList, product
        ])
    }

    const vaciarCarrito = () =>{
        setCartList([])
    }

    // hacer las siguientes funciones ******

    // const totalProducto = () =>{

    // }


    // const eliminarProductoPorID = () =>{

    // }

    return (
        <CartContext.Provider value={{
            cartList,
            addProduct,
            vaciarCarrito//,
            // totalProducto,
            // eliminarProductoPorID
        }}>
            {children}
        </CartContext.Provider>
    )
}