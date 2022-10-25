import React, { Component } from 'react'

export class Descricao extends Component {
  render() {
    const { value, handleChange } = this.props
    return (
        <labe>
            Descrição
                <textarea name="descricao" value={value} onChange={handleChange}/>
        </labe>
    )
  }
}

export default Descricao;
