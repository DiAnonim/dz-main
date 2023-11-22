import React from "react";
import s from "./Section1.module.scss";

import Button from "../../Components/Button/Button";

function Section1({ btnClassName, valState }) {
    const clickBtn = () => {
        valState((prev) => ({
            ...prev,
            todos: [
                ...prev.todos,
                {
                    title: prev.newTitle,
                    task: prev.newTask,
                    date: `${new Date().getDate()}.${new Date().getMonth() + 1}.${new Date().getFullYear()}`,
                }],

        }))
    };

    return <div className={s.section1}>
        <input type="text" placeholder="Заголовок"
            onChange={(e) => (
                valState((prev) => ({
                    ...prev, newTitle: e.target.value,
                }))
            )} />
        <input className={s.input2} type="text" placeholder="Ваша Заметка"
            onChange={(e) => (
                valState((prev) => ({ ...prev, newTask: e.target.value }))
            )} />
        <Button className={btnClassName} onClickBtn={clickBtn}>Save</Button>
    </div>
}

export default Section1;