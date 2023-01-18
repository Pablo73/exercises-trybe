// // ./src/App.js
// import React, { Component } from 'react';

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       counter: 0,
//     };
//   }

//   render() {
//     const { counter } = this.state;

//     return (
//       <div>
//         <div>Counter: {counter}</div>
//         <button
//           type="button"
//           onClick={() =>
//             this.setState((prevState) => ({ counter: prevState.counter + 1 }))
//           }
//         >
//           Increase Counter
//         </button>
//       </div>
//     );
//   }
// }

// export default App;

import React, { useState } from 'react';
import { Chart } from "react-google-charts";

const values = [
  [
    'Value', 
    'Counter',
  ],
];

function App() {
  const [value, setValue] = useState(0)
  const [counter, setCounter] = useState(1);
  const array = [value, counter]
  values.push (array);

const options = {
  chart: {
    title: 'Aprendendo a usar graficos',
    subtitle: 'contagem'
  }
}
  return (
    <div>
      <div>Counter: {counter}</div>
      <button type="button" onClick={() => (setCounter(counter * 2) || setValue(value + 1))}>
        Increase Counter
      </button>
      <Chart
        chartType="Line"
        data={values}
        width="100%"
        height="400px"
        options={options}
      />
    </div>
  );
}

export default App;
