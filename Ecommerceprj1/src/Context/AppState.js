import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import AppContext from "./AppContext";

export default function AppState(props) {
  
  const [cartItems, setCartItems] = useState([]);
  useEffect(()=>{
    getFromLS()
  },[])
   let saveOrder=(orderDetails)=>{
    console.log("saving order");
    console.log(orderDetails);
   }
  let getFromLS =()=>{
       setCartItems(JSON.parse(localStorage.getItem("cartItems")));
  };
  let saveToLS=(products)=>{
    localStorage.setItem("cartItems",JSON.stringify(products));
  }
 

  let addProductToCart = (item) => {
    let matchProduct = false;
    let i;

    for (i = 0; i < cartItems.length; i++) {
      if (cartItems[i].id === item.id) {
        matchProduct = true;
      }
    }

    if (matchProduct) {
      toast.error("Product is already in cart");
    } else {
      setCartItems([...cartItems, item]);
      saveToLS([...cartItems,item]);
      getFromLS();
      toast.success("Product Added To Cart");
      {/*setOpen(true)  */}
      
      
    }
  };

  let removeItemFromCart= (item)=>{
    let updatedCartItems = cartItems.filter((product)=>{
        return product.id !== item.id;
    })

    setCartItems(updatedCartItems);
    saveToLS(updatedCartItems);
    getFromLS();
    toast.success("Item deleted successfully");

  }

  return (
    <AppContext.Provider value={{ cartItems, setCartItems, addProductToCart,removeItemFromCart,saveOrder }}>
      {props.children}
    </AppContext.Provider>
  );
}