import React from "react";
import s from "./Header.module.scss";

function Header() {
    return <div className={s.header}>
        <span className={s.logo}>Keeper</span>
    </div>
}

export default Header;