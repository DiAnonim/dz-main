function Button({ op, number, valState }) {
    let newRes;

    if(op == "+"){
        
    }

    // switch (op) {
    //     case "+":
    //         // newRes = parseInt(prev.res) + parseInt(number)
    //         // return <div>
    //         //     <button onClick={() => valState((prev) => ({
    //         //         ...prev,
    //         //         newInp: number,
    //         //         res: 
    //         //     }))}>{number}</button>
    //         // </div >
    //         break;
    //     case "-":
    //     case "*":
    //     case "/":
    //     default:
    //         return;
    // }

    return <div>
        <button onClick={() => valState((prev) => ({
            ...prev,
            newInp: number,
            res: parseInt(prev.res) + parseInt(number)
        }))}>{number}</button>
    </div >
}

export default Button;