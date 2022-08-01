import { Component } from "react";

class App1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isExpand: false,
            content: 'Introduce'
        }
    }
    handler = () => {
        this.setState({ isExpand: false })
    }
    handlerbrip = () => {
        this.setState({ isExpand: true })
    }

    render() {
        if (this.state.isExpand == false) {
            return (
                <div className="container">
                    <h1>Introduce</h1>
                    <div class="container p-5 my-5 bg-dark text-white">
                        <button type="button" class="btn btn-dark" onClick={this.handlerbrip}>See Introduce</button>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="container">
                    <div class="container p-5 my-5 bg-dark text-white">
                        <p>{this.state.content}</p>
                        <button type="button" class="btn btn-dark" onClick={this.handler}>Close Introduce</button>
                    </div>
                </div>
            )
        }
    }
}
export default App1;