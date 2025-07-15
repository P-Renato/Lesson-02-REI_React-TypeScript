import type { Product } from '../reducers/cart'

function ProductComp({data, dispatch}: {data: Product, dispatch: any}) {
  return (
    <div className='card'>
      <img src={data.image} alt={data.title} />
      <h3>{data.title}</h3>
      <p>price: {Number(data.price).toFixed(2)}</p>
      <button onClick={()=> dispatch({type: "ADD_TO_CART", payload: data})}>Add to cart</button>
    </div>
  )
}

export default ProductComp
