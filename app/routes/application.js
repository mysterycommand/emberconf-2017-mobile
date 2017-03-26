import Ember from 'ember';

const { Route, RSVP: { hash } } = Ember;

export default Route.extend({
  model() {
    return hash({
      speakers: this.store.findAll('speaker'),
      bingotargets: this.store.findAll('bingotarget')
    });
  }
});
