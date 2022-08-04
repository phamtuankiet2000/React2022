import { Component } from "react";
import { useState } from "react";

export default function Test1(props) {
    const [items, setItems] = useState(
        [
            {
                name: "Iphone 7 Plus", price: 500.0
            },
            {
                name: "Iphone 8 Plus", price: 1400.0
            },
            {
                name: "Iphone 10", price: 1600.0
            },
            {
                name: "Iphone 10 Pro", price: 1700.0
            }
        ]
    );


    const addItem = () => {
        let currentValue = document.getElementById('todoList').value;
        setItems([...items, {
            name: currentValue.name,
            price: currentValue.price,
        }])

    }
    // Edit = (item, index) => {
    //     this.setState({
    //         action: 'UPDATE ITEM',
    //         name: item.name,
    //         price: item.price,
    //         index: index
    //     });
    // }
    // updateItem = () => {
    //     let data = this.state.items;
    //     data.map((item, index) => {
    //         if (this.state.index === index) {
    //             item.name = this.state.name;
    //             item.price = parseInt(this.state.price);
    //         }
    //     })
    //     //set update items
    //     this.setState({
    //         items: data,
    //         name: "",
    //         price: "",
    //         action: 'ADD_ITEM'
    //     })

    // }

    // deleteItem = (name) => this.setState({
    //     items: this.state.items.filter(item => item.name != name)
    // })
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <h1>{this.state.action}</h1>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="mx-2" required placeholder="Todo List" id="todoList"></input>
                    </div>
                    <div className="form-group">
                        <label>Price</label>
                        <input type="text" className="mx-2" required placeholder="Todo List" id="todoList"></input>
                    </div>
                    <br></br>
                    <div className="form-group">
                        <button type="button" className="btn btn-primary" onClick={addItem}>Add</button>
                        {/* this.state.action == 'ADD ITEM' ? this.addItem : this.updateItem */}
                    </div>
                </div>

                <div className="col-md-8">
                    <h1>List Products</h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>SDT</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Modify</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                items.map()
                                // this.state.items.map((item, index) => (
                                //     <tr key={index}>
                                //         <td>{index}</td>
                                //         <td>{item.name}</td>
                                //         <td>{item.price} $</td>
                                //         <td><label className="badge badge-warning" onClick={() => this.Edit(item, index)}>modify</label></td>
                                //         <td><label className="badge badge-danger" onClick={() => this.deleteItem(item.name)}>remove</label></td>
                                //     </tr>
                                // ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}





