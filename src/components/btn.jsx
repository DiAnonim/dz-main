function Button({ op, number, valState }) {

    const BtnOper = () => {
        if (op === "+") {
            valState((prev) => ({
                ...prev,
                res: parseInt(prev.res) + parseInt(number)
            }))
        }
        else if (op === "-") {
            valState((prev) => ({
                ...prev,
                res: parseInt(prev.res) - parseInt(number)
            }))
        }
        else if (op === "*") {
            valState((prev) => ({
                ...prev,
                res: parseInt(prev.res) * parseInt(number)
            }))
        }
        else if (op === "/") {
            valState((prev) => ({
                ...prev,
                res: parseInt(prev.res) / parseInt(number)
            }))

        }
        else {
            valState((prev) => ({
                ...prev,
                res: number
            }))
        }
    }

    return <div>
        <button onClick={BtnOper}>{number}</button>
    </div >
}

export default Button;