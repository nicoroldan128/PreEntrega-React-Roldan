import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import { CartContainer } from './components/CartContainer/CartContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'

function App() {

  return (
    <Router>
      <div>
        <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting= "Nuestros Productos"/>}/>
            <Route path='/categoria/:categoriaId' element={<ItemListContainer greeting= "Categoria seleccionada"/>}/>
            <Route path='/detalle/:pid' element={<ItemDetailContainer />}/>
            {/* <Route path='/cart' element={<CartContainer />}/> */}
            
            <Route path="*" element={<Navigate to= "/"/>}/>
          </Routes>
      </div>
    </Router>
    
  )
}

export default App
