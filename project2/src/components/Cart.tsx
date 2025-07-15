import type { Product } from "../reducers/cart"

function Cart({products, dispatch}: {products: Product[]; dispatch: any}) {
  return (
    <div className="cart-item">
      <h3>Cart Items: </h3>
      {products.map(product => (
        <div  key={product.id}>
            <h4>{product.title}</h4>
            <p>{Number(product.price).toFixed(2)}</p>
            <button onClick={()=> dispatch({type: "REMOVE_FROM_CART", payload: product.id})}>X</button>
            
        </div>
      ))}
            {products.length && (
        <button onClick={() => dispatch({ type: "CLEAR_CART" })}>
          Clear All
        </button>
      )}
    </div>
  )
}

export default Cart
