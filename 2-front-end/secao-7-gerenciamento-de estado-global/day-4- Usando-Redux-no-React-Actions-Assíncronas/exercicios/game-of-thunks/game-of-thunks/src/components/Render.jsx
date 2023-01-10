import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Render extends Component {
  render() {
    const { name, culture, aliases } = this.props;

    return (
      <div>
        <h1>{ name }</h1>
        <h3> { culture }</h3>
        <ol>
          { aliases.map((element, index) => 
           <li key={`${index} = ${element}`}>{ element }</li>) }
        </ol>
      </div>
    )
  }
}

Render.propTypes = {
    name: PropTypes.string.isRequired,
    culture:  PropTypes.string.isRequired,
    aliases: PropTypes.array.isRequired,
  };


const mapStateToProps = (state) => {
    return {
      name: state.name,
      culture: state.culture,
      aliases: state.aliases,
    }
  }

export default connect(mapStateToProps)(Render);
