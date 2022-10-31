import React, { Component } from 'react'
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';

class LoginForm extends Component {

  state = {
    email: '',
    password: '',
    isButtonDisabled: true,
    emailsLogged: []
  }

  handleChange = (event) => {
    const { target } = event;
    this.setState({ [target.name]: target.value }, () => {
      const { email, password } = this.state;
      const newButtonDisabledState = email.length < 6
        || !email.includes('@')
        || password.length < 6;

      this.setState({
        isButtonDisabled: newButtonDisabledState
      });
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    this.setState((prevState) => {
      return {
        emailsLogged: [...prevState.emailsLogged, email ]
      }
    });

    // O código acima pode ser resumido para isso:
    // this.setState(({ emailsLogged }) => ({
    //   emailsLogged: [...emailsLogged, email ]
    // }));

    alert(`Foi feito um login com o email: ${email} e a senha ${password}`);
  }

  render() {
    const { email, password, isButtonDisabled } = this.state;
    return (
      <section>
        <form onSubmit={ this.handleSubmit }>
          <h2>Login</h2>

          <EmailInput
            email={ email }
            handleChange={ this.handleChange }
          />
          <PasswordInput
            password={ password }
            handleChange={ this.handleChange }
          />
          <button disabled={ isButtonDisabled } >Fazer Login</button>
        </form>
      </section>
    );
  }
}

export default LoginForm;