import React from "react";

function Button({ children, className, onClickBtn }) {
    return <>
        <button className={className}
            onClick={onClickBtn}>{children} </button>
    </>
}

export default Button;