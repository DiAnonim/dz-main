import React from "react";
import s from "./HomePage.module.scss";

import Button from "../../Components/Button";

function HomePage() {
    const clickBtn = () => console.log("smt");

    return <div>
        <Button className={s.button} onClickBtn={clickBtn}>Save</Button>
    </div>
}

export default HomePage;