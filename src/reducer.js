import { Map, fromJS } from 'immutable';

import * as actions from './actions';

export default function reducer(state = Map(), action) {
  switch (action.type) {
    case actions.SET_EMAIL:
      return state.set('email', action.email);
    case actions.SET_BODY:
      return state.set('body', action.body);
    case actions.SET_AUTOCOMPLETE:
      return state.set('hits', fromJS(action.hits));
    case actions.SET_VALIDATION_ERROR:
      return state.set('validationError', action.status);
    default:
      return state;
  }
}
