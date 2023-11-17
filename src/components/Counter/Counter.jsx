import React, { useState } from "react";
import s from "./Counter.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { addBy, decrement, divBy, increment, multiBy, redBy } from "../../store/counterSlice";

function Counter() {
    // const [state, setState] = useState({
    //     cnt: 0,
    // })

    const dispatch = useDispatch();
    const { count } = useSelector((state) => state.counter)

    const onIncrement = () => {
        dispatch(increment())
    }
    const onDecrement = () => {
        dispatch(decrement())
    }

    const onAddBy = () => {
        dispatch(addBy(10))
    }

    const onRedBy = () => {
        dispatch(redBy(10))
    }

    const onMultiBy = () => {
        dispatch(multiBy(2))
    }

    const onDivBy = () => {
        dispatch(divBy(2))
    }

    return <div className={s.counter}>
        <div className={s.buttons}>
            <button className={s.button}
                onClick={onIncrement}>+1</button>
            <button className={s.button}
                onClick={onDecrement}>-1</button>
            <button className={s.button}
                onClick={onAddBy}>+10</button>
            <button className={s.button}
                onClick={onRedBy}>-10</button>
            <button className={s.button}
                onClick={onMultiBy}>*2</button>
            <button className={s.button}
                onClick={onDivBy}>/2</button>
        </div>
        <div className={s.value} >{count}</div>
    </div>


    // return <div className={s.counter}>
    //     <div className={s.buttons}>
    //         <button className={s.button}
    //             onClick={() => setState((prev) => ({
    //                 ...prev,
    //                 cnt: prev.cnt + 1
    //             }))}
    //         >+1</button>
    //         <button className={s.button}
    //             onClick={() => setState((prev) => ({
    //                 ...prev,
    //                 cnt: prev.cnt - 1
    //             }))}
    //         >-1</button>
    //     </div>
    //     <div className={s.value} >{state.cnt}</div>
    // </div>

}

export default Counter;