import { useCounter } from "../../hooks/useCounter.js"
import './itemCounter.css'

export const ItemCounter = ({initial=1, stock=5, onAdd}) => {
   const { counter, handleRestar, handleSumar } = useCounter(initial, stock)

    const handleOnAdd = () => {
        onAdd(counter)
    }

    return (
        <div className="section-item-counter">
            <div className="label-item-counter">
                <button className="btn-item-counter" onClick={handleRestar}> - </button>
                <label>{counter}</label>
                <button className="btn-item-counter" onClick={handleSumar}> + </button> 
            </div>
            <div>
                <button className="btn-add-cart" onClick={handleOnAdd}> Agregar al Carrito </button>  
            </div>      
        </div>
    )
}