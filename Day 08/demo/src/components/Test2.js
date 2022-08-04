import { useState } from "react";

export default function Home(props) {

    const [items, setItems] = useState(
        [
            {
                name: "Iphone 7 Plus", price: 500.0, action: "ADD ITEM",
            },
            {
                name: "Iphone 8 Plus", price: 1400.0, action: "ADD ITEM",
            },
            {
                name: "Iphone 10", price: 1600.0, action: "ADD ITEM",
            },
            {
                name: "Iphone 10 Pro", price: 1700.0,
            }
        ]
    )

    const addItem = () => {
        let currentValue = document.getElementById('todoList').value;
        let currentValue1 = document.getElementById('todoList1').value;
        setItems([...items, { name: currentValue, price: currentValue1 }]);
    }

    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <a className="navbar-brand" href="#"> QUẢN LÝ THU CHI</a>
                        <div className="collapse navbar-collapse" id="navbarNav">
                        </div>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                        </form>
                        <button type="button" className="btn btn-primary btn-lg me-2">Lập phiếu thu</button>
                        <button type="button" className="btn btn-primary btn-lg me-2">Lập phiếu chi</button>
                        <button type="button" className="btn btn-primary btn-lg">Xuất File</button>
                    </div>
                </div>

            </nav>
            

        </div>
    );
}