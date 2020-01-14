import { Factory, trait } from 'ember-cli-mirage';

export default Factory.extend({
  avatarUrl: `https://dogeo4ne9xfxq.cloudfront.net/sized/032e703fd2abb6-EN11443/small_thumbnail.jpg?1566837307`,
  token: '12345',
  instagram: trait({
    profileType: 'instagram'
  }),
  facebook: trait({
    profileType: 'facebook'
  }),
  twitter: trait({
    profileType: 'twitter'
  }),
  pinterest: trait({
    profileType: 'pinterest'
  }),
  hasError: trait({
    token: ''
  })
});
