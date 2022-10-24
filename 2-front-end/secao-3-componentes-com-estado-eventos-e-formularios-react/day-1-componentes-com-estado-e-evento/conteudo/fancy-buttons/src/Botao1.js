import React from 'react';

class Botao1 extends React.Component {

    getButtonColor(num) {
      return num % 2 === 0 ? 'green' : 'white';
    }

  constructor (props) {
    super ()
    this.state = {
      numeroDeCliques: 0
    }
  }

handleClick1 = () => {
  this.setState ((estadoAnterior, _props) => ({
    numeroDeCliques: estadoAnterior.numeroDeCliques + 1
  }))
  console.log(`Você clicou no botão 1 (${this.state.numeroDeCliques} vezes)`)
}

  render() {
    // console.log(this)
    return (<button className={'Botao1'}
    type="button" 
    onClick={this.handleClick1}
    style={{backgroundColor:this.getButtonColor(this.state.numeroDeCliques)}}
    >
    Meu botão 1 mudar de cor cuando for par {this.state.numeroDeCliques} {this.getButtonColor(this.state.numeroDeCliques)}
    </button>
    )
  }
}

export default Botao1;