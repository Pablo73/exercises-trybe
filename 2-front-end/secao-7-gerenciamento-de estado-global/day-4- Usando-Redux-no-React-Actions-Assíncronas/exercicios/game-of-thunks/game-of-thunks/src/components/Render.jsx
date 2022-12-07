import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Render extends Component {
  render() {
    const { name, culture } = this.props;

    return (
      <div>
        <h1>{ name }</h1>
        <h3> { culture }</h3>
      </div>
    )
  }
}

Render.propTypes = {
    name: PropTypes.string.isRequired,
    culture:  PropTypes.string.isRequired,
  };


const mapStateToProps = (state) => {
    return {
      name: state.name,
      culture: state.culture,
    }
  }

export default connect(mapStateToProps)(Render);
