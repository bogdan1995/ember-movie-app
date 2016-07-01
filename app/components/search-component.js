import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    searchMovie(search) {
      "use strict";
      const ENTER = 13;
      if (search.keyCode === ENTER) {
        // TODO: Should route to search, but i don't know how it make
      }
      Ember.set(this, 'searchStr', search.target.value);
    }
  },
  searchStr: ''
});
