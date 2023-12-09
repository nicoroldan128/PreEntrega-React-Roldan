import ItemListContainer from './components/ItemListContainer/ItemListContainer'

import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'

import 'bootstrap/dist/css/bootstrap.min.css'
import { CartContainer } from './components/CartContainer/CartContainer'
import { CartContextProvider } from './contexts/CartContext'

function App() {

  return (
    <BrowserRouter>
      <CartContextProvider>
        <div className='body-app'>
          <NavBar />
            <Routes>
              <Route path='/' element={<ItemListContainer greeting= "Nuestros Productos"/>}/>
              <Route path='/categoria/:categoriaId' element={<ItemListContainer greeting= "Categoria seleccionada"/>}/>
              <Route path='/detalle/:pid' element={<ItemDetailContainer />}/>
              <Route path='/cart' element={<CartContainer />}/>
              <Route path='*' element={<Navigate to= "/"/>}/>
            </Routes>
        </div>
      </CartContextProvider>
    </BrowserRouter>
    
  )
}

export default App
