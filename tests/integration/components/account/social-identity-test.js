import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { setupMirage } from 'ember-cli-mirage/test-support';

module('Integration | Component | account/social-identity-set', function(hooks) {
  setupRenderingTest(hooks);
  setupMirage(hooks);

  test('it renders four social profiles correctly when you find the records', async function(assert) {
    let identity = this.server.create('social-identity', { name: 'My first set!' });

    let instagram = this.server.create('social-profile', 'instagram', {
      socialIdentity: identity
    });

    let facebook = this.server.create('social-profile', 'facebook', {
      socialIdentity: identity
    });

    let twitter = this.server.create('social-profile', 'twitter', {
      socialIdentity: identity
    });

    let pinterest = this.server.create('social-profile', 'pinterest', {
      socialIdentity: identity
    });
    let store = this.owner.lookup('service:store');

    let myFirstSet = await store.findRecord('socialIdentity', identity.id);
    await store.findRecord('socialProfile', facebook.id);
    await store.findRecord('socialProfile', instagram.id);
    await store.findRecord('socialProfile', twitter.id);
    await store.findRecord('socialProfile', pinterest.id);

    this.set('firstSet', myFirstSet);

    await render(hbs`
      <Account::SocialIdentity @socialIdentity={{firstSet}} />
    `);

    assert.dom('[data-profile-type="fb"]').exists();
    assert.dom('[data-profile-type="ig"]').exists();
    assert.dom('[data-profile-type="tw"]').exists();
    assert.dom('[data-profile-type="pi"]').exists();
    assert.dom('[data-test-id="placeholder"]').doesNotExist();
  });

  test('it renders only placeholdes if you do not find related records', async function(assert) {
    let identity = this.server.create('social-identity', { name: 'My first set!' });

    this.server.create('social-profile', 'instagram', {
      socialIdentity: identity
    });

    this.server.create('social-profile', 'facebook', {
      socialIdentity: identity
    });

    this.server.create('social-profile', 'twitter', {
      socialIdentity: identity
    });

    this.server.create('social-profile', 'pinterest', {
      socialIdentity: identity
    });
    let store = this.owner.lookup('service:store');

    let myFirstSet = await store.findRecord('socialIdentity', identity.id);

    this.set('firstSet', myFirstSet);

    await render(hbs`
      <Account::SocialIdentity @socialIdentity={{firstSet}} />
    `);

    assert.dom('[data-profile-type="fb"]').doesNotExist();
    assert.dom('[data-profile-type="ig"]').doesNotExist();
    assert.dom('[data-profile-type="tw"]').doesNotExist();
    assert.dom('[data-profile-type="pi"]').doesNotExist();
    assert.dom('[data-test-id="placeholder"]').exists({count: 4});
  });
});
