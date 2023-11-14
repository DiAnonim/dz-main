import Button from "./btn";
import './style.css';
import { useState } from "react";

function Home() {
    const [state, setState] = useState({
        res: 0,
        newInp: "",
    });


    return <div>
        <input className="inp" type="text" value={state.res} />
        <div className="homePage">
            <div className="homePage-numb">
                <Button valState={setState} number="1"></Button>
                <Button valState={setState} number="4"></Button>
                <Button valState={setState} number="7"></Button>
            </div>
            <div className="homePage-numb">
                <Button valState={setState} number="2"></Button>
                <Button valState={setState} number="5"></Button>
                <Button valState={setState} number="8"></Button>
            </div>
            <div className="homePage-numb">
                <Button valState={setState} number="3"></Button>
                <Button valState={setState} number="6"></Button>
                <Button valState={setState} number="9"></Button>
            </div>
            <div className="homePage-Enter">
                <Button valState={setState} number="+"></Button>
                <Button valState={setState} number="-"></Button>
                <Button valState={setState} number="*"></Button>
                <Button valState={setState} number="/"></Button>
            </div>
        </div>
        <div className="homePage-Zero">
            <Button valState={setState} number="0"></Button>
        </div>
    </div>
}

export default Home;