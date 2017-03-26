import Ember from 'ember';

const { Component, computed } = Ember;

export default Component.extend({
  classNames: ['speaker-item'],
  tagName: 'li',
  attributeBindings: ['speaker.id:data-speaker'],
  _portraitStyle: computed('speaker.photo-url', function () {
    return `background-image: url('${this.get('speaker.photo-url')}');`.htmlSafe()
  }),
  _speakerTwitterName: computed('speaker.twitter-url', function () {
    let url = this.get('speaker.twitter-url');
    let i = url.lastIndexOf('/');
    return url.substring(i + 1);
  })
});
