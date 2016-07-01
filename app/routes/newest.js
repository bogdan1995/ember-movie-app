import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    "use strict";
    const API_KEY = '72b56103e43843412a992a8d64bf96e9';
    return Ember.$.getJSON(`http://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`)
      .then((data)=> data);
  }
});
