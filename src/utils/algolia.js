import algoliasearch from 'algoliasearch';
import _ from 'underscore';

import config from '../../app_config';

// It would be great to add to searchable attributes only name field
// but setSettings method only available in HTTPS
export default algoliasearch(
  config.algolia.applicationID,
  config.algolia.key
).initIndex(
  config.algolia.index
);

export function extractData(hits) {
  // Unfortunately, algolia does not support filtering null values
  // so we need to do it on application level explicitly
  return hits.filter(
    ({ email }) => !!email
  ).map(
    hit => _.pick(hit, 'name', 'email', 'objectID')
  );
}
