import React, { Component } from 'react'

export class Nome extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
        <labe>
            Nome
            <input
                name="nome" 
                type="text" 
                value={value} 
                onChange={handleChange}
            />
         </labe>
    )
  }
}

export default Nome;
