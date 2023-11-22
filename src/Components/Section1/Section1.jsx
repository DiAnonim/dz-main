import React from "react";
import s from "./Section1.module.scss";

import Button from "../../Components/Button/Button";

function Section1({ btnClassName }) {
    const clickBtn = () => console.log("smt");

    return <div className={s.section1}>
        <input type="text" placeholder="Заголовок"/>
        <input className={s.input2} type="text" placeholder="Ваша Заметка"/>
        <Button className={btnClassName} onClickBtn={clickBtn}>Save</Button> 
    </div>
}

export default Section1;