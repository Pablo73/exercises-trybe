import React, { Component } from 'react'

export class Email extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
       <labe>
            Email
                <input 
                    name="email" 
                    type="email" 
                    value={value} 
                    onChange={handleChange}/>
        </labe>
    )
  }
}

export default Email;
