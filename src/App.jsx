import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import { CartContainer } from './components/CartContainer/CartContainer'
import { CartContextProvider } from './contexts/CartContext'
import NavBar from './components/NavBar/NavBar'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
    <BrowserRouter>
      <CartContextProvider>
        <div className='body-app'>
          <NavBar />
            <Routes>
              <Route path='/' element={<ItemListContainer greeting= 'Nuestros Productos'/>}/>
              <Route path='/categoria/:categoryId' element={<ItemListContainer greeting= 'Categoria: '/>}/>
              <Route path='/detalle/:pid' element={<ItemDetailContainer />}/>
              <Route path='/cart' element={<CartContainer />}/>
              <Route path='*' element={<Navigate to= '/'/>}/>
            </Routes>
        </div>
      </CartContextProvider>
    </BrowserRouter>
    
  )
}

export default App
