import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({
  classNames: ['schedule-item'],
  tagName: 'li',
  attributeBindings: ['session.id:data-session']
});
