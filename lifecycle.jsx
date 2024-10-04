import React from "react";

class Lifecycle2 extends React.Component {
    constructor(){
        super();
        this.state ={value: "welcome to",name: "frontend"};
    }
    componentWillUnmount(){
        alert("learn reactjs lifecycle")
    }
    changevalue = () => {
        this.setState({name: "learn reactjs event"})
    }
    componentDidMount(){
        {
            setTimeout(() => {
                this.setState({name: "react js"})
            },5000)
        }
    }
    componentWillUpdate(){
        document.getElementById('element').innerHTML= "new value update sucessfully"+' '+this.state.name;

    }
    shouldComponentUpdate(){
        return true;
    }
    delete =()=>{
        this.setState({value:false,name:false});
    }
    render(){
        return(
            <div>
                <h1>reactjs component lifecycle</h1>
                <h2>{this.state.value}{this.state.name}</h2>
                <h2 id = "element"></h2>
                <br/>
                <button type="button" onClick={this.changevalue}>delet</button>
                <button type="button" onClick={this.delete}>delet</button>

            </div>
        );
    }

}
export default Lifecycle2;