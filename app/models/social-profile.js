import Model, { attr, belongsTo } from '@ember-data/model';
import { equal } from '@ember/object/computed';
import { isBlank } from '@ember/utils';
import { computed } from '@ember/object';

export default Model.extend({

  token: attr('string'),
  profileType: attr('string'),
  socialIdentity: belongsTo('socialIdentity', { async: true }),
  avatarUrl: attr('string'),

  isInstagram: equal('profileType', 'instagram'),
  isTwitter: equal('profileType', 'twitter'),
  isPinterest: equal('profileType', 'pinterest'),
  isFacebook: equal('profileType', 'facebook'),

  platformAbbreviation: computed('isInstagram', 'isTwitter', 'isPinterest', 'isFacebook', function() {
    if (this.isInstagram) {
      return 'ig';
    } else if (this.isTwitter) {
      return 'tw';
    } else if (this.isPinterest) {
      return 'pi';
    } else if (this.isFacebook) {
      return 'fb';
    } else {
      return null;
    }
  }),

  /**
   * 
   *
   * @method hasError
   * @returns {boolean}
   *
   */
  hasError: computed('token', function() {
    return isBlank(this.token);
  }),
});
