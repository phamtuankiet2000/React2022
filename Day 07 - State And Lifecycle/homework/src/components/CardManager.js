import { useState } from "react";
import TodoCard from "./TodoCard";

export default function CardManager(props) {
    let [todo, setTodo] = useState([
        { title: "Lorem Ipsum" ,id: 1},
        { title: "Lorem Ipsum 2" ,id: 2},
        // { title: "Lorem Ipsum 3" },
        // { title: "Lorem Ipsum 4" },
        // { title: "Lorem Ipsum 5" },
        // { title: "Lorem Ipsum 6" },
    ]);

    const addTodo = () => {
        let currentValue = document.getElementById('todoList').value;
        console.log(currentValue);
        setTodo([...todo, { title: currentValue }]);
    }
    return (
        <div className="container">
            <div className="text-center py-4">
                <h2>Todo List</h2>
                <input type="text" className="mx-2" required placeholder="Todo List" id="todoList"></input>
                <button className="btn btn-primary mx-2" onClick={addTodo}>Add</button>
            </div>
            <div className="row">
                {
                    todo.map((a, index) => (
                        <TodoCard key={index} title={a.title} text={a.id}></TodoCard>
                    ))
                }
            </div>
        </div>
    )
}