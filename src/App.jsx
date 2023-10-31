// import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Hola" />
    </>
  )
}

export default App
