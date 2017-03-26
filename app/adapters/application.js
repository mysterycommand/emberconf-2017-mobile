import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'https://emberconf-2017-api.mike.works',
  namespace: 'api'
});
