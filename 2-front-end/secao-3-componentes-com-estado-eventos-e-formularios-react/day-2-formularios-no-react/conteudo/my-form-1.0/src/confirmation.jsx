import React, { Component } from 'react'

export class Confirmation extends Component {
  render() {
    const { value, handleChange } = this.props
    return (
        <labe>
          Confirmação
              <input name="confirmation" type="checkbox" value={value} onChange={handleChange}/>
        </labe>
    )
  }
}

export default Confirmation
