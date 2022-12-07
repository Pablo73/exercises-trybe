import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchImagen } from '../redux/actions';
import PropTypes from 'prop-types';

class Header extends Component {
  state = {
    valueInput: '',
  }

  inputValue = ({ target }) => {
    const { value } = target;
    this.setState({ valueInput: value });
  };

  handleSubmit = () => {
    const { dispatch } = this.props;
    dispatch(fetchImagen(this.state.valueInput))

  }

  const 
  render() {
    const { isLoading } = this.props;
    return (
      <div>
        <h1>Famosos Game of Thrones</h1>
        <input
            className="input"
            type="text"
            onChange={ this.inputValue  }
          />
        <button
        onClick={ this.handleSubmit }
        >Nova Imagem</button>
        {
          isLoading && <h3>Loading...</h3>
        }
      </div>
    )
  }
}

Header.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
  }
}

export default connect(mapStateToProps)(Header);
