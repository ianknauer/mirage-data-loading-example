import Component from '@ember/component';
import { computed } from '@ember/object';
import { isEmpty } from '@ember/utils';

export default Component.extend({
  hasErrors: computed('socialIdentity.socialProfiles.@each.hasError', function() {
    return !isEmpty(this.socialIdentity.socialProfiles.filterBy('hasError'));
  }),

  instagramProfile: computed('socialIdentity.socialProfiles.@each.isInstagram', function() {
    return this.socialIdentity.socialProfiles.filterBy('isInstagram').objectAt(0);
  }),

  hasInstagramProfile: computed('instagramProfiles', function() {
    return !isEmpty(this.instagramProfile);
  }),

  twitterProfile: computed('socialIdentity.socialProfiles.@each.isTwitter', function() {
    return this.socialIdentity.socialProfiles.filterBy('isTwitter').objectAt(0);
  }),

  hasTwitterProfile: computed('twitterProfiles', function() {
    return !isEmpty(this.twitterProfile);
  }),

  pinterestProfile: computed('socialIdentity.socialProfiles.@each.isPinterest', function() {
    return this.socialIdentity.socialProfiles.filterBy('isPinterest').objectAt(0);
  }),

  hasPinterestProfile: computed('pinterestProfiles', function() {
    return !isEmpty(this.pinterestProfile);
  }),

  facebookProfile: computed('socialIdentity.socialProfiles.@each.isFacebook', function() {
    return this.socialIdentity.socialProfiles.filterBy('isFacebook').objectAt(0);
  }),

  hasFacebookProfile: computed('facebookProfiles', function() {
    return !isEmpty(this.facebookProfile);
  }),

  actions: {
    toggleEditing() {
      this.toggleProperty('isEditing');
    }
  }
});
