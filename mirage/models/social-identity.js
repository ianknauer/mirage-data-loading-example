import { Model, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  socialProfiles: hasMany('social-profile')
});
