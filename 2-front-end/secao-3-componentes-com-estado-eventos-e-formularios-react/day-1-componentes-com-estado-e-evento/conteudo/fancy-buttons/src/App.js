import React from 'react';
import './App.css';
import Botao2 from './Botao2'
import Botao1 from './Botao1'
import Botao3 from './Botao3'

class App extends React.Component {

  render() {
    return (
      <div>
        <Botao1 />
        <Botao2 />
        <Botao3 />
      </div>
    )
  }
}

export default App;