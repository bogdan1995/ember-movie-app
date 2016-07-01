import Ember from 'ember';

export default Ember.Component.extend({
  didRender() {
    "use strict";
    this.reloadPlates();
  },
  reloadPlates() {
    "use strict";
    /**
     * Init bricklayer
     */
    new Bricklayer(document.querySelector('.bricklayer'));
  }
});
