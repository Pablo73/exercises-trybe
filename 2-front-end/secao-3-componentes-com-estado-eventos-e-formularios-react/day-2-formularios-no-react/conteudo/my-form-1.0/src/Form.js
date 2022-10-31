import { Component } from "react";
import Confirmation from "./confirmation"
import Descricao from "./descricao"
import Password from "./password"
import Email from "./email"
import Nome from "./nome";

class Form extends Component {

    state = {
            nome: '',
            email: '',
            password: '',
            descricao: '',
            confirmation: false,
        }
    


handleChange = ({ target }) => {
    const { name } = target;
const value = (target.type === 'checkbox') ? target.checked : target.value;

    this.setState ({
        [name]: value
    })
}

render () {
    const { confirmation, descricao, password, email, nome } = this.state;
    return (
            <div>
                <from>
                <Confirmation value={confirmation} handleChange={this.handleChange}/>
                <Descricao value={descricao} handleChange={this.handleChange}/>
                <Password value={password} handleChange={this.handleChange}/>
                <Email value={email} handleChange={this.handleChange}/>
                <Nome value={nome} handleChange={this.handleChange}/>
                </from>
            </div>
        )
    } 
}

export default Form;
