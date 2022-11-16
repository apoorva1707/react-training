import React,{useState,useContext} from "react";
import {Routes,Route,Link,Navigate} from "react-router-dom";
import './App.css';
import Logo from './Images/logo.PNG'
import HomePage from "./Pages/HomePage";
import CategoryPage from "./Pages/CategoryPage";
import SingleProductPage from "./Pages/SingleProductPage";
import Error404 from "./Pages/Error404";
import CheckoutPage from './Pages/CheckoutPage';
import Header from './Pages/Header';
import Cart from './Pages/Cart';
import { Toaster } from "react-hot-toast";



function App(){
  const [open,setOpen] = useState(false);

  return(
    <div className=''>
  
    <Toaster position="top-right" reverseOrder={false} />
    <Header setOpen={setOpen}/>
    <Cart open={open} setOpen={setOpen}/> 
    <div className='pt-16'>
    
      <Routes>
        <Route index element={<HomePage/>}/>
        <Route path='/category/:id' element={<CategoryPage/>}/>
        <Route path="products/:id" element={<SingleProductPage/>}/>
        <Route path="checkout" element={<CheckoutPage/>}/>
        <Route path="*" element={<Error404/>}/>
     
      </Routes>
     </div>
    </div>
  );
}

export default App;
