import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('bingo-nav', 'Integration | Component | bingo nav', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{bingo-nav}}`);

  assert.equal(this.$().text().replace(/[\s\n]+/g, '').trim(), 'EmberConfBingoBingoScheduleSpeakers');
});
