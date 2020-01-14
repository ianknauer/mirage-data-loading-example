export default function() {

  this.get('/api/v2/social_identities');
  this.get('/api/v2/social_identities/:id');

  this.get('/api/v2/social_profiles');
  this.get('/api/v2/social_profiles/:id');
}
