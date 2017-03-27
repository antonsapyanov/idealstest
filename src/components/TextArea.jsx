import React from 'react';
import { connect } from 'react-redux';

import { setBody } from '../action_creators';

class TextArea extends React.PureComponent {
  render() {
    return (
      <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          className="form-control"
          rows="5"
          onChange={this.props.onValueChange}
          value={this.props.value}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { value: state.get('body') };
}

function mapDispatchToProps(dispatch) {
  return { onValueChange: e => dispatch(setBody(e.target.value)) };
}

export const TextAreaContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TextArea);
