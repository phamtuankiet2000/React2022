import { useState } from "react";

export default function Timer() {
    const [timer, setTimer] = useState(10);

    const useEffect = () => {
        setTimer((timer) => timer - 1)
        setTimeout(() => { clearInterval(timerId); alert('Time’s up'); }, 10000);
    }
    let timerId = setInterval(() => useEffect(), 1000);
    return (
        <div className="container">

        </div>
    )
}