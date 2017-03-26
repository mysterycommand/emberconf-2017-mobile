import Ember from 'ember';

const { Component, run: { scheduleOnce, later } } = Ember;

export default Component.extend({
  classNames: ['schedule-items'],
  tagName: 'ul',
  selectedSession: null,
  didInsertElement() {
    this._super(...arguments);
    if (this.get('selectedSession')) {
      later(() => {
        scheduleOnce('afterRender', this, '_scrollToSelectedSession');
      }, 210);
    }
  },
  _scrollToSelectedSession() {
    let $itemElem = this.$(`li.schedule-item[data-session="${this.get('selectedSession')}"]`)[0];
    if ($itemElem && window) {
      window.scrollTo(0, $itemElem.offsetTop)
    }
  }
});
