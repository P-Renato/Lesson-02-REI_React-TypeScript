export type Product = {
    id: number;
    title: string;
    price: string;
    description: string;
    category: "men's clothing" | "women's clothing" | "jewelery" | "electronic";
    image: string;
    rating: {
        rate: number;
        count: number;
    }
}

export type State = {
    cart: Product[];
    products: Product[];
};

type Action = {
    type: string;
    payload?: any;
}

export const initialState = {
    cart: [],
    products: [],
}

export const cartReducer = (state: State, action: Action): State => {
  const newState = structuredClone(state)

    switch (action.type) {
        case "FETCH_PRODUCTS":
            newState.products = action.payload
            return newState;
        case "ADD_TO_CART":
            return {
        ...state, 
        cart: [...state.cart, action.payload]
      }
        case "REMOVE_FROM_CART":
            newState.cart = newState.cart.filter((item)=> item.id !== action.payload);
            return newState;
        case 'CLEAR_CART':
            newState.cart = [];
            return newState;
    
        default:
            break;
    }
}