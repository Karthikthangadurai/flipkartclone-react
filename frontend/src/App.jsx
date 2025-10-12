import { useState } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Cartlist from './pages/Cartlist';
import Products from './pages/Products';


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Login" element={<Login/>}/>
    <Route path="/Signup" element={<Signup/>}/>
    <Route path="/Cartlist" element={<Cartlist/>}/>
    <Route path="/Products" element={<Products/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
