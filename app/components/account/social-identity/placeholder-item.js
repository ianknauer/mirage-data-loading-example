import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  isSelected: false,

  platformAbbreviation: computed('platform', function() {
    if (this.platform === 'instagram') {
      return 'ig';
    } else if (this.platform === 'twitter') {
      return 'tw';
    } else if (this.platform === 'pinterest') {
      return 'pin';
    } else if (this.platform === 'facebook') {
      return 'fb';
    } else {
      return null;
    }
  }),


  toggleSelect() {
    this.toggleProperty('isSelected');
  }
  
});
