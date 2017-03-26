import DS from 'ember-data';

const { Model, attr, hasMany } = DS;

export default Model.extend({
  name: attr('string'),
  bio: attr('string'),
  'twitter-url': attr('string'),
  'photo-url': attr('string'),
  sessions: hasMany('session')
});
