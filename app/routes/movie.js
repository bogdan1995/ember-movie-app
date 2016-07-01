import Ember from 'ember';

export default Ember.Route.extend({
  API_KEY: '72b56103e43843412a992a8d64bf96e9',
  model(data) {
    "use strict";
    const QUERY = encodeURIComponent(data['movie_id']);
    /**
     * Get data for movie
     */
    return Ember.$.getJSON(`http://api.themoviedb.org/3/movie/${QUERY}?api_key=${this.API_KEY}`)
      .then((data)=> data);
  }
});
