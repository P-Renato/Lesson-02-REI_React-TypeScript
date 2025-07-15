type State = {
    counter: number;
}

type Action = {
    type: string;
    payload?: any;
}

export const initialState: State = { counter: 0}
export const countReducer= (state: State, action: Action) => {
    switch (action.type) {
        case "INCREMENT":
            return {counter: state.counter+1}

        case "DECREMENT":
            return {counter: state.counter-1}
            
        case "POWEROF2":
            return {counter: state.counter**2}
    
        default:
            console.error("Unknown action ", action);
            return state;
    }
}