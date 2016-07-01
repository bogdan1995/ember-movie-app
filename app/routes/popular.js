import Ember from 'ember';

export default Ember.Route.extend({
  /**
   * get popular movies
   * @returns {*}
     */
  model() {
    "use strict";
    const API_KEY = '72b56103e43843412a992a8d64bf96e9';
    return Ember.$.getJSON(`http://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
      .then((data)=> data);
  }
});
