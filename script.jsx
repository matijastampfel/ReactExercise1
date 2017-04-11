/*jshint esnext: true, moz: true*/
/*jslint browser:true */
/*global React.Component, React, ReactDOM */

// first part/////////////////////////////////////////////////////////////////////////////


var app = document.getElementById("app");




class TextEdit extends React.Component{

    constructor(props){
        super(props);
        this.state = {};
        this.setValue = this.setValue.bind(this);
    }

    setValue(e){
        var value = e.target.value;
        this.setState({valueX:value});
       
    
    }


    render() {
       
        return(
            <section>
            <input onChange={this.setValue} type="text"/>
            <p >{this.state.valueX}</p>
            </section>
        );
    }
}

ReactDOM.render(<TextEdit/>, app);

//***************************************************************************************************** */

class SumText extends React.Component{

    constructor(props){
        super(props);
        this.state = {value1:0, value2:0};
        this.sumValue1 = this.sumValue1.bind(this);
        this.sumValue2 = this.sumValue2.bind(this);
    }

sumValue1(e){
    var value1 = e.target.value;
    this.setState({value1:value1})
}

sumValue2(e){
    var value2 = e.target.value;
    this.setState({value2:value2})
}

    render() {
       let sum = Number(this.state.value1)+Number(this.state.value2);
        return(
            <section>
            <input onChange = {this.sumValue1}  type="text"/>
           
            <input onChange = {this.sumValue2}  type="text"/>

            <p>{sum}</p>
            </section>
        );
        
    }

}

ReactDOM.render(<SumText/>, hola);
// **************************************************************************************//

//Button state//////////////////////////////////////////////////////////////////////////////

class Button extends React.Component{

    constructor(props){
        super(props);
        this.state = {};
        this.button = this.button.bind(this);
    }

button(e){
    var bt = document.getElementsByClassName("btns");
    for(var i = 0; i < bt.length; i++){
        bt[i].className = "btns";
    }
    var button = e.target;
    this.setState({title:button.title})
    button.className = "clicked btns";
    

}

render() {
    return(
<section>
    <button onClick={this.button} title="First button" className="btns">First button</button>
    <button onClick={this.button} title="Second button" className="btns">Second button</button>
    <p>
        {this.state.title}
    </p>
</section>
    );
}


}

ReactDOM.render(<Button/>, document.getElementById("gumb"))
//************************************************************************************** */