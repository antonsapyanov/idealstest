import React from 'react';
import { connect } from 'react-redux';
import _ from 'underscore';

import { setEmail, requestAutocomplete } from '../action_creators';

// We do not want to send a new request on each key press
// that is why we debounce our request function
const debouncedAutocomplete = _.debounce((dispatch, value) => {
  dispatch(requestAutocomplete(value));
}, 500);

class Input extends React.PureComponent {
  render() {
    return (
      <div className="form-group">
        <label htmlFor="recipient">Recipient:</label>
        <input
          id="recipient"
          className="form-control"
          list="hits"
          value={this.props.value}
          onChange={this.props.onValueChange}
        />
        <datalist id="hits">
          {this.props.hits.map(hit => {
            return (
              <option key={hit.get('objectID')} value={hit.get('email')}>
                {hit.get('name')}
              </option>
            );
          })}
        </datalist>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    value: state.get('email'),
    hits: state.get('hits')
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onValueChange: e => {
      dispatch(setEmail(e.target.value));
      debouncedAutocomplete(dispatch, e.target.value);
    }
  };
}

export const InputContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Input);
