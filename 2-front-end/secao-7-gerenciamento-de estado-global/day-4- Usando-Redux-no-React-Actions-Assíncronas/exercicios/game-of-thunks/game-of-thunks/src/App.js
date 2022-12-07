import React from 'react';
import { connect } from 'react-redux';
import Header from './components/Header';
import Render from './components/Render';


class App extends React.Component {
  render() {
    return (
      <div>
       <Header />
       <Render />
      </div>
    );
  }
}

export default connect()(App);

