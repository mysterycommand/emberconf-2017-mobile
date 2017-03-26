import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  url: DS.attr('string'),
  start: DS.attr('date'),
  end: DS.attr('date'),
  speaker: DS.belongsTo('speaker')
});
