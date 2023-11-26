import React, { useState } from "react";
import s from "./Counter.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { addBy, decrement, divBy, increment, multiBy, redBy } from "../../store/counterSlice";

function Counter() {
    const [stateCnt, setStateCnt] = useState({
        cnt: 0,
    })

    const dispatch = useDispatch();
    const { count } = useSelector((state) => state.counter)

    const onIncrement = () => {
        dispatch(increment())
    }
    const onDecrement = () => {
        dispatch(decrement())
    }

    const onAddBy = (val) => {
        dispatch(addBy(parseInt(val)))
    }

    const onRedBy = (val) => {
        dispatch(redBy(parseInt(val)))
    }

    const onMultiBy = (val) => {
        dispatch(multiBy(parseInt(val)))
    }

    const onDivBy = (val) => {
        dispatch(divBy(parseInt(val)))
    }

    return <div className={s.counter}>
        <input className={s.input} type="text" onChange={(e) => setStateCnt((prev) => ({ ...prev, cnt: e.target.value }))} />
        <div className={s.buttons}>
            <button className={s.button}
                onClick={onIncrement}>+1</button>
            <button className={s.button}
                onClick={onDecrement}>-1</button>
            <button className={s.button}
                onClick={() => onAddBy(stateCnt.cnt !== 0 ? stateCnt.cnt : 10)}>+10</button>
            <button className={s.button}
                onClick={() => onRedBy(stateCnt.cnt !== 0 ? stateCnt.cnt : 10)}>-10</button>
            <button className={s.button}
                onClick={() => onMultiBy(stateCnt.cnt !== 0 ? stateCnt.cnt : 2)}>*2</button>
            <button className={s.button}
                onClick={() => onDivBy(stateCnt.cnt !== 0 ? stateCnt.cnt : 2)}>/2</button>
        </div>
        <div className={s.value} >{count}</div>
    </div>

}

export default Counter;