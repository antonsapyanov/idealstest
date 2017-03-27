import * as actions from './actions';
import algolia, { extractData } from './utils/algolia';
import submitMessage from './utils/submit';
import validateEmail from './utils/validate';

export function setEmail(email) {
  return { type: actions.SET_EMAIL, email };
}

export function setBody(body) {
  return { type: actions.SET_BODY, body };
}

export function setAutocomplete(hits) {
  return { type: actions.SET_AUTOCOMPLETE, hits };
}

export function setValidationError(status) {
  return { type: actions.SET_VALIDATION_ERROR, status};
}

export function sendMessage() {
  return (dispatch, getState) => {
    const state = getState();
    const email = state.get('email');
    const body = state.get('body');
    if (validateEmail(email)) {
      dispatch(setValidationError(false));
      submitMessage({ email, body }).then(() => {
        alert('Message was successfully delivered!');
      }).catch(() => {
        alert('Oooops! Some error occurred while sending the message. Look at your console.');
      });
    } else {
      dispatch(setValidationError(true));
    }
  };
}

export function requestAutocomplete(username) {
  return dispatch => {
    algolia.search(username, {
      attributesToRetrieve: ['name', 'email'],
      hitsPerPage: 10
    }).then(({ hits }) => {
      dispatch(setAutocomplete(extractData(hits)));
    }).catch(({ message }) => {
      console.error(`Error during autocomplete request: ${message}`);
    });
  };
}
