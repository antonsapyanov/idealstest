import React from 'react';
import { connect } from 'react-redux';

import { sendMessage } from '../action_creators';

import { InputContainer } from './Input.jsx';
import { TextAreaContainer } from './TextArea.jsx';

function VallidationError(props) {
  return (
    <div className="alert alert-danger" role="alert">
      <strong>Ooops!</strong> You have entered incorrect email
    </div>
  );
}

class Main extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <form onSubmit={this.props.onFormSubmit}>
            <InputContainer />
            {this.props.validationError && <VallidationError />}
            <TextAreaContainer />
            <div className="text-center">
              <button
                type="submit"
                className="btn btn-lg btn-success ">
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    validationError: state.get('validationError'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onFormSubmit: e => { e.preventDefault(); dispatch(sendMessage()); }
  };
}

export const MainContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
