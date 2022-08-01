import { getValue } from "@testing-library/user-event/dist/utils";
import { Component } from "react";

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input1: '',
            input2: '',
            result: '0'
        }
    }

    sum = () => {
        console.log(this.state.input1);
        this.setState({ result: this.promtNu1.input1 + this.promtNu2.input2})
    }

    subtraction = (inputNu1, inputNu2) => {
        this.setState({ result: this.promt.input1 - this.promt.input2 })
    }

    multiplication = (inputNu1, inputNu2) => {
        this.setState({ result: this.promt.input1 * this.promt.input2 })
    }

    division = (inputNu1, inputNu2) => {
        this.setState({ result: this.promt.input1 / this.promt.input2 })
    }

    promtNu1 = (Object) => {
        var input1 = Object.getValue;
        console.log(input1)
    }

    promtNu2 = (Object) => {
        var input2 = Object.getValue;
        console.log(input2)
    }

    render() {
        return (
            <div className="container">
                <form>
                    <input type='number' id='input1' value={this.state.input1} ></input>
                    <input type='number' id='input2' value={this.state.input2} ></input>
                    <p>{this.state.result}</p>
                    <button type="button" class="btn" onClick={this.sum}>SUM</button>
                    <button type="button" class="btn btn-primary" onClick={this.subtraction}>SUB</button>
                    <button type="button" class="btn btn-secondary" onClick={this.multiplication}>MUL</button>
                    <button type="button" class="btn btn-success" onClick={this.division}>Div</button>
                </form>
            </div>
        )
    }
}

export default Calculator;