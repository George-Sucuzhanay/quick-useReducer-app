import { useReducer } from "react";
import reducer from "../reducers/reducer";

const initialState = 1;


const Home = () => {
    const [state, dispatch]  = useReducer(reducer, initialState)

    function multiply(value){
        dispatch({type: "MULTIPLY", payload: value})
    }
    function divide(value){
        dispatch({type: "DIVIDE", payload: value})
    }
    return (
        <div>
            <h1>This is Home</h1>
            <button onClick={() => multiply(2)}>Multiply by 2</button>
            <button onClick={() => divide(2)}>Divide by 2</button>
            <h1>{state}</h1>

        </div>
    )
}
export default Home;