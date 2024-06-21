import React, {useState} from "react";

const UseStatePrac1 = () => {
    const [toggleBtn, setToggleBtn] = useState(false);
    return(
        <div>
            <h1>Toggle</h1>
            <h3>{`On Toggle: ${toggleBtn ? "ON" : "OFF"}`}</h3>
            <button onClick={() => {setToggleBtn(!toggleBtn)}}>Toggle Content</button>
        </div>
    )
}

export default UseStatePrac1;
