import { useState } from "react";

export default function Click() {
    const [name, setName] = useState('Hoa');

    let changeName = () => {
        setName('Lan');
    }

    <div className="container">
        <span>{name}</span>
        <button onClick={changeName()}>Click to change name</button>
    </div>
}