
import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
// import {Switch , Route} from 'react-router-dom'
import Products from './component/Products';
import Product from './component/Product';


function App() {
  return (
   <>
   
  
<Navbar/>

<Routes>
  <Route path='/' element={<Home />}/>
  <Route path='/products' element={<Products />}/>
  <Route path='/product' element={<Product />}/>
</Routes>

   </>
  );
}

export default App;
