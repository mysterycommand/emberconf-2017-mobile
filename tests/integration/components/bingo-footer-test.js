import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('bingo-footer', 'Integration | Component | bingo footer', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{bingo-footer}}`);

  assert.equal(this.$().text().trim(), '©Mike.Works, Inc. 2017, All Rights Reserved');
});
