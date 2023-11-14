function Button({ number, valState }) {

    return <div>

        <button onClick={() => valState((prev) => ({
            ...prev,
            newInp: number,
            res: parseInt(prev.res) + parseInt(number)
        }))}>{number}</button>
    </div >
}

export default Button;