import React, { useState } from "react";
import s from "./HomePage.module.scss";

import Header from "../../Components/Header/Header";
import Section1 from "../../Components/Section1/Section1";
import TodoGrid from "../../Components/TodoGrid";

function HomePage() {
    const [state, setState] = useState({

        todos: [
            {
                id: 1,
                title: "task1",
                task: "Do something",
                date: "20.12.2023",
            },
            {
                id: 2,
                title: "task2",
                task: "Don't something",
                date: "06.07.2023",
            },
            {
                id: 3,
                title: "task3",
                task: "I love Anime",
                date: "15.02.2023",
            },
        ],

    })

    return <div>
        <Header />
        <Section1 btnClassName={s.button} valState={setState}></Section1>
        <TodoGrid todos={state.todos} />
    </div>
}

export default HomePage;