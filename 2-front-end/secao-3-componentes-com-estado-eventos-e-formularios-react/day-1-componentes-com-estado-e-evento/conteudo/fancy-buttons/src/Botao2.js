import React from 'react';

class Botão2 extends React.Component {

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
    return (<button onClick={this.handleClick2}>{this.state.numeroDeCliques}</button>
    )
  }
}

export default Botão2;