import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('popular');
  this.route('newest');
  this.route('search', {path: '/search/:search_string'});
  this.route('movie', {path: '/movie/:movie_id'});
});

export default Router;
