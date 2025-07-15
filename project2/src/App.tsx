import { useEffect, useReducer, useState } from "react"
import { cartReducer, initialState, type Product, type State } from "./reducers/cart";
import ProductComp from "./components/Product";
import './App.css'
import Cart from "./components/Cart";

function App() {

  const [state, dispatch] = useReducer(cartReducer, initialState);
  const [showCart, setShowCart] = useState(false);
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => dispatch({type: 'FETCH_PRODUCTS', payload: data}))
  }, [])
  return (
    <div className="products">
      <button onClick={()=> setShowCart(val => !val)}>Show cart</button>
      <h1>List of Products</h1>
      {state.products.map((product:Product) => (
        <ProductComp data={product} dispatch={dispatch}  key={product.id}/>
        ))}
        {showCart && (
          <div className="cart">
          <Cart products={state.cart} dispatch={dispatch}/>
        </div>
        )}
        
    </div>
  );
}

export default App