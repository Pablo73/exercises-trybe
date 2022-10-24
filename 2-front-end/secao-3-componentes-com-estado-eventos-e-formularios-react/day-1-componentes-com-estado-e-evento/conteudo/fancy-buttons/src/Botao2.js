import React from 'react';

class Botão2 extends React.Component {

  getButtonColor(num) {
    return num % 2 === 0 ? 'blue' : 'red';
  }

  constructor (props) {
    super ()
    this.handleClick2 = this.handleClick2.bind(this);
  }

  state = {
    numeroDeCliques: 0,
  }

handleClick2() {
  this.setState ((estadoAnterior, _props) => ({
    numeroDeCliques: estadoAnterior.numeroDeCliques + 1
  }))
}

  render() {
    // console.log(this)
    return (<button className={'Botao2'}
    onClick={this.handleClick2}
    style={{backgroundColor:this.getButtonColor(this.state.numeroDeCliques)}}
    >
    {this.state.numeroDeCliques} {this.getButtonColor(this.state.numeroDeCliques)}
    </button>
    )
  }
}

export default Botão2;