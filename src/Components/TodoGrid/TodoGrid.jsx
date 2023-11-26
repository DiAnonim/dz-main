import React from "react";
import s from "./TodoGrid.module.scss";
import Todo from "../Todo/Todo";

function TodoGrid({ todos = [] }) {
    return <div className={s.todoGrid}>
        {todos.map(e => (<Todo title={e.title} value={e.task} date={e.date}/>))}
        </div>
}

export default TodoGrid;