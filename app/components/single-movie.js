import Ember from 'ember';

export default Ember.Component.extend({
  API_KEY: '72b56103e43843412a992a8d64bf96e9',
  /**
   * Action on initialization:
   * get videos by movie id
   */
  init() {
    "use strict";
    this._super(...arguments);
    let QUERY = location.pathname.split('/').pop();
    Ember.$.getJSON(`http://api.themoviedb.org/3/movie/${QUERY}/videos?api_key=${this.API_KEY}`)
      .then((data)=> {
        this.set('videos', data.results);
      });
  }
});
