import { useEffect } from "react"
import { Spinner } from "react-bootstrap"
import "./loading.css"

export const Loading = () =>{
    useEffect(()=>{
      return () => {}
    }
  
    )
  
    return (
      <div className="divPadre">
        <div className="divHijo">
          <Spinner color="dark" /> Cargando
        </div>
      </div>
    )
  }
  