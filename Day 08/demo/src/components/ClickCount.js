import { useState } from "react";

export default function Click() {
    const [count, setCount] = useState(H);
    let increaseByOne = () => {
        setCount(count + 1);
    }
    return (
        <div className="container">
            <span>{count}</span>
            {/* <button onClick={() => { setCount(count + 1) }}>Increase by one</button> */}
            <button onClick={increaseByOne()}>Increase by one</button>
        </div>
    )
}