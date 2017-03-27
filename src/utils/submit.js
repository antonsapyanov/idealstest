import config from '../../app_config';

export default function submitMessage(data) {
  return fetch(config.submitUrl, {
    method: 'POST',
    body: JSON.stringify(data),
  });
}
