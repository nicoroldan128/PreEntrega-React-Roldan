import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList"
import { task } from "../../helpers/task";
import './ItemListContainer.css'
import { useParams } from "react-router-dom";

const ItemListContainer = ({greeting}) => {
  const [productos, setProductos] = useState([])

  const {categoriaId} = useParams()

  useEffect(() => {
    if(categoriaId){
      task()
      .then((result) => setProductos(result.filter(productos => productos.category === categoriaId)))
      .catch((err) => console.log(err));
    }else{
      task()
      .then((result) => setProductos(result))
      .catch((err) => console.log(err));
    }
  }, [categoriaId])
    
    

  return (
    <div>
      <h2 className="text-center mt-3">{greeting}</h2>
      <div className="items-container">
        <ItemList productos={productos}/>
      </div>
      
    </div>
  )
}

export default ItemListContainer