import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({
  model() {
    return {
      bingotargets: this.store.peekAll('bingotarget'),
      speakers: this.store.peekAll('speaker')
    };
  }
});
