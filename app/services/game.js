import Ember from 'ember';

const { Service, Logger: { log } } = Ember;

export default Service.extend({
  init() {
    this._super(...arguments);
    this.set('moves', []);
  },
  makeMove({speaker, target}) {
    this.get('moves').addObject({speaker, target});
    log(`move made: ${speaker} did ${target}`);
  }
});
