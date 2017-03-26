import { moduleForModel, test } from 'ember-qunit';

moduleForModel('speaker', 'Unit | Model | speaker', {
  // Specify the other units that are required for this test.
  needs: ['model:session']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
