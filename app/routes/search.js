import Ember from 'ember';

export default Ember.Route.extend({
  model(data) {
    "use strict";
    const API_KEY = '72b56103e43843412a992a8d64bf96e9';
    const QUERY = encodeURIComponent(data['search_string']);
    let page = 1;
    return Ember.$.getJSON(`http://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${QUERY}&page=${page}`)
      .then((data)=> data);

  }
});
