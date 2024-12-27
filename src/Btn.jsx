 import { useDispatch } from "react-redux";
import { incrementNum, reset, decrementNum, incrementNumFive, decrementNumFive  } from "./redux/reducer";


const Btn = () => {
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={()=>{
                dispatch(incrementNum())
            }}>+1</button>
            <button onClick={()=>{
                dispatch(decrementNum())
            }}>-1</button>
            <button onClick={()=>{
                dispatch(incrementNumFive())
            }}>+5</button>
            <button onClick={()=>{
                dispatch(decrementNumFive())
            }}>-5</button>
            <button onClick={()=>{
                dispatch(reset())
            }}>reset</button>
        </div>
    );
}

export default Btn;
