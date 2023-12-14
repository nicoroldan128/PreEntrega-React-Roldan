import { createContext, useState, useContext } from "react";

const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({ children }) => {

    const [cartList, setCartList] = useState([])
    const itIsInCart = (idProduct) => cartList.findIndex(product => product.id === idProduct)

    const addProduct = (product) =>{
        const indexProduct = itIsInCart(product.id)

        if(indexProduct !== -1){
            setCartList([
                ...cartList
            ])
        }else{
            setCartList([
                ...cartList, product
            ])
        }
    }

    const emptyCart = () =>{ setCartList([]) }

    const totalPurchase = () => cartList.reduce((total, product) => total += (product.price * product.cantidad), 0)

    const totalProductInCart = () => cartList.reduce((cantTotal, product) => cantTotal += product.cantidad, 0)

    const deleteProduct = (idProduct) => {
        setCartList(cartList.filter(product => product.id !== idProduct))
    } 

    return (
        <CartContext.Provider value={{
            cartList,
            addProduct,
            emptyCart,
            totalPurchase,
            totalProductInCart,
            deleteProduct        
        }}>
            {children}
        </CartContext.Provider>
    )
}