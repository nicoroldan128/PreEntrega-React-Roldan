import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList"
import { task } from "../../helpers/task";
import './ItemListContainer.css'
import { useParams } from "react-router-dom";

const Loading = () =>{
  useEffect(()=>{
    return () => {}
  }

  )

  return (
    <h2>Cargando ...</h2> 
  )
}

const ItemListContainer = ({greeting}) => {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)

  const {categoriaId} = useParams()

  useEffect(() => {
    if(categoriaId){
      task()
      .then((result) => setProductos(result.filter(productos => productos.category === categoriaId)))
      .catch((err) => console.log(err))
      .finally(()=> setLoading(false))
    }else{
      task()
      .then((result) => setProductos(result))
      .catch((err) => console.log(err))
      .finally(()=> setLoading(false))
    }
  }, [categoriaId])
    
    

  return (
    <div>
      <h2 className="text-center mt-3">{greeting}</h2>
      {
        loading ? <Loading />
                : <div className="items-container">
                   <ItemList productos={productos}/>
                  </div>
      } 
    </div>
  )
}

export default ItemListContainer