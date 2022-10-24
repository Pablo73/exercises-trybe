import React from 'react';

class Botao3 extends React.Component {
  getButtonColor(num) {
    return num % 2 === 0 ? 'green' : 'white';
  }

  constructor (props) {
    super ()
    this.handleClick3 = this.handleClick3.bind(this);
    this.state = {
      numeroDeCliques: 1
    }
  }

handleClick3() {
    this.setState((estadoAnterior, _props) => ({
        numeroDeCliques: estadoAnterior.numeroDeCliques + 1
    }))
  console.log(`${this.state.numeroDeCliques} click no botão 3`)
}

  render() {
    // console.log(this)
    return (<button className={'Botao3'}
    onClick={() => this.handleClick3(this.state.numeroDeCliques)} 
    style={ { backgroundColor: this.getButtonColor(this.state.numeroDeCliques) } }
    >
    {this.state.numeroDeCliques} click no botão 3 
    </button>
    )
  }
}

export default Botao3;