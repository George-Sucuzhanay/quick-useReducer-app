export default function reducer(state, action){
    switch(action.type){
        case "MULTIPLY" :
            let currentValue = state;
            return currentValue *= action.payload;
        case "DIVIDE":
            let value = state;
            return value /= action.payload;
        default: 
            return state;
    }
}