import React, { Component } from 'react'

export class Password extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <div>
        <labe>
            Password
                <input name="password" type="password" value={value} onChange={handleChange}/>
            </labe>
        </div>
    )
  }
}

export default Password;
