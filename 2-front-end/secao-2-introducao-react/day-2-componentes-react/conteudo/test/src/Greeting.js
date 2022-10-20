import React from 'react';

class Greeting extends React.Component {
  render() {
    const { name, lastName } = this.props;
    return <h1>Hello, {name} {lastName}</h1>;
  }
}

export default Greeting;

//-------------------------------------------------------------------------------------------------------------

// import React from 'react';

// class Greeting extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name} {this.props.lastName}</h1>;
//   }
// }

// export default Greeting;