import React, {Component} from 'react';
import './Form.css';

class Form extends Component{
    constructor(props){
        super(props);
        this.state={fullname:"mohantomar",
                    email:"enter  your email ID",
                     phone:"8000873655",
                    message:"Hello World"
                }
            }                
    handlechangeall=(event) => {
        this.setState({[event.target.name] : event.target.value })

    }
    
    handlesubmit = (event) =>{
        alert(JSON.stringify(this.state));
        event.preventDefault();
    }

    
    render(){
        return(
            <div>
                <form onSubmit={this.handlesubmit}>
                    <label>Fullname</label>
                    <input type="text" name="fullname" value={this.state.fullname}
                    onChange={this.handlechangeall}/><br/>


                    <label>Email</label><br/>
                    <input type="email" name="email" value={this.state.email}
                    onChange={this.handlechangeall}/><br/>


                    <label>Mobile</label><br/>
                    <input type="number" name="phone" value={this.state.number}
                    onChange={this.handlechangeall}/><br/>


                    <label>Message</label>
                    <textarea value={this.state.message} name="message"
                    onChange={this.handlechangeall}/> <br/>


                    <input type="submit" value="Send"/>
                </form>
            </div>
        )
    }
}


export default Form;