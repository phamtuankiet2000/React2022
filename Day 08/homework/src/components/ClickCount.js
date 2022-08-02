import { useState } from "react";

export default function Click() {
    const [count, setCount] = useState(H);
    let increaseByOne = () => {
        setCount(count + 1);
    }
    let increaseByTwo = () => {
        setCount(count + 2);
    }
    return (
        <div className="container">
            <span>{count}</span>
            <button onClick={increaseByOne()}>Add 1</button>
            <button onClick={increaseByTwo()}>Add 2</button>
        </div>
    )
}