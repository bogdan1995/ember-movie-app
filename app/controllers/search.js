import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    /**
     * Click handler on "Move Movies" button
     */
    getMoreMovies() {
      "use strict";
      this.getSearchQuery();
      const API_KEY = '72b56103e43843412a992a8d64bf96e9';
      let QUERY = this.get('search'); // What user does insert
      let page = this.get('model.page'); // What is current page
      let totalPages = this.get('model.total_pages');
      let currentMovies = JSON.parse(JSON.stringify(this.get('model.results'))); // Copy our model
      if ( page < totalPages ) {
        Ember.$.getJSON(`http://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${QUERY}&page=${++page}`)
          .then((movies)=> {
            // get more movies and concat their with existing movies
            let data = currentMovies.concat(movies.results);
            this.set('model', movies);
            this.set('model.results', data);
          });
      }

    }
  },
  /**
   * Find user query from address bar
   */
  getSearchQuery() {
    "use strict";
    this.set('search', decodeURIComponent(location.pathname.split('/').pop()));
  }
});
