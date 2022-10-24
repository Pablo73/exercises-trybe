import React from 'react';

class Botao1 extends React.Component {

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
    return (<button type="button" onClick={this.handleClick1}>Meu botão 1</button>
    )
  }
}

export default Botao1;