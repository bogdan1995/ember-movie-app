import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    getMoreMovies(currentPage) {
      "use strict";
      console.log(currentPage);
      console.log(this.get('model'));

      
    }
  }
});
