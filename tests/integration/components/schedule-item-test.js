import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import moment from 'moment';

moduleForComponent('schedule-item', 'Integration | Component | schedule item', {
  integration: true
});

test('it renders', function(assert) {

  this.set('session', {
    start: moment('01-01-2017'),
    title: 'A session'
  });

  this.render(hbs`{{schedule-item session=session}}`);

  assert.equal(this.$().text().replace(/[\s\n]+/g, ''), '00:00amAsession');

});
