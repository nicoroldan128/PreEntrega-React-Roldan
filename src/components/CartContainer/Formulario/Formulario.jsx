import { useState } from 'react'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import './formulario.css'
import { useCartContext } from '../../../contexts/CartContext'

export const Formulario =  () => {
    const [formData, setFormData] = useState({name: "", phone: "", email: "", repetirEmail: ""})
    const [isId, setIsId] = useState('')
    const {cartList, emptyCart, totalPurchase} = useCartContext()

    const createOrder = async (evt) =>{
        evt.preventDefault()
        const order = {}
        order.buyer = formData
        order.items = cartList.map(({id, name, price}) => ({id, name, price}))
        order.total = totalPurchase()
    
        const db = getFirestore()
        const orderColletion = collection(db, 'orders')
    
        addDoc(orderColletion, order)
        .then(resp => setIsId(resp.id))
        .catch(error => console.log(error))
        .finally(()=>{
          setFormData(
            {name: '',
             phone: '',
             email: '',
             repetirEmail: ''
            })
            emptyCart()
        })
      }

      const handleOnChange = (evt) => {
        setFormData({
          ...formData,
          [evt.target.name]: evt.target.value
        })
      }
    
    return(
        <>
            <form className='form-control form-style' onSubmit={createOrder}>
                <h3>Datos del comprador</h3>
                <input className='form-control' 
                      type='text'
                      name='name' 
                      placeholder='Ingresar su nombre'
                      value={formData.name}
                      onChange={handleOnChange}
                      required
                /><br/>
                <input className='form-control' 
                      type='text'  
                      name='phone'
                      placeholder='Ingresar su telefono'  
                      value={formData.phone} 
                      onChange={handleOnChange}
                      required
                /><br/>
                <input className='form-control' 
                      type='text'  
                      name='email'  
                      placeholder='Ingresar su email'
                      value={formData.email} 
                      onChange={handleOnChange}
                      required
                /><br/>
                <input className='form-control' 
                      type='text'  
                      name='repetirEmail' 
                      placeholder='Repetir su email'
                      value={formData.repetirEmail} 
                      onChange={handleOnChange}
                      required
                />
                <button className='btn btn-success'>Terminar Compra</button>
              </form>
              
            </>
    )

}                