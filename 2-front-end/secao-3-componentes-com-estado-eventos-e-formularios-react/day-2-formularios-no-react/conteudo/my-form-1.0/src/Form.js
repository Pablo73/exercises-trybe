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
const value = target.type === 'checkbox' ? target.checkbox : target.value

    this.setState ({
        [name]: value
    })
}

render () {
    return (
            <div>
                <from>
                <Confirmation value={this.state.confirmation} handleChange={this.handleChange}/>
                <Descricao value={this.state.descricao} handleChange={this.handleChange}/>
                <Password value={this.state.password} handleChange={this.handleChange}/>
                <Email value={this.state.email} handleChange={this.handleChange}/>
                <Nome value={this.state.nome} handleChange={this.handleChange}/>
                </from>
            </div>
        )
    } 
}

export default Form;
