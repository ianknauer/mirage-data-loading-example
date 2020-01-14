import Component from '@ember/component';

export default Component.extend({
  attributeBindings: ['socialProfile.platformAbbreviation:data-profile-type'],
  isEditing: false,

  toggleEditing() {
    this.toggleProperty('isEditing');
  } 
});
