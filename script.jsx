var React = require('react');
var ReactDOM = require ("react-dom");



class App extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            message1: "",
            message2: ""
        };
        this.handleKeyUp1 = this.handleKeyUp1.blind(this);
        this.handleKeyUp2 = this.handleKeyUp2.blind(this);

    }

    handleKeyUp1(event) {
        this.setState({
            message2: event.target.value
        });
    }
handleKeyUp2(event){
    this.setState({
        message1: event.target.value
    });
}


    render() {
        return (
            <div className="myform" >
            <MyForm handleKeyUp = {this.handleKeyUp1} message = {this.state.message1} />
            <MyForm handleKeyUp = {this.handleKeyUp2} message = {this.state.message2} />
           </div>
        );
    }
}

function MyForm(props) {
    return <div>
        <input type="text" onKeyUp= {props.handleKeyUp} />
        <span>{props.message}</span>
        </div>
}

ReactDOM.render(<App></App>,
document.getElementById("app")

)