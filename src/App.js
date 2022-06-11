
import './App.css';
import HomeContent from './components/HomeContent';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div>
      {/* <NavBar/>
      <div className='mainDiv'>
        <div>
          <ItemListContainer/>
        </div>
        <div className='box'>
          <ItemDetailContainer/>
        </div>
        {/* <HomeContent/>  */}
        {/* <ItemDetailContainer/> </div> */}

      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

