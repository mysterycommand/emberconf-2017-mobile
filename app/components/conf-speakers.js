import Ember from 'ember';

const { Component, run: { scheduleOnce, later } } = Ember;

export default Component.extend({
  classNames: ['speakers'],
  tagName: ['ul'],
  selectedSpeaker: null,
  didInsertElement() {
    this._super(...arguments);
    if (this.get('selectedSpeaker')) {
      later(() => {
        scheduleOnce('afterRender', this, '_scrollToSelectedSpeaker');
      }, 210);
    }
  },
  _scrollToSelectedSpeaker() {
    let $speakerElem = this.$(`.speaker-item[data-speaker="${this.get('selectedSpeaker')}"]`)[0];
    if ($speakerElem && window) {
      window.scrollTo(0, $speakerElem.offsetTop);
    }
  }
});
