

import { useDispatch, useSelector } from "react-redux";
import {  decrement, increment, reset } from "../slicer/CounterSlicer";


const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
   
    
    return (
        <>
            <div>{count}</div>
            <button onClick={() => dispatch(increment())}>Add</button>
            <button onClick={() => dispatch(decrement())}>Reduce</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
            
        </>
    );
}

export default Counter;
