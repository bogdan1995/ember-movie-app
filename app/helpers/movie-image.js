import Ember from 'ember';

export function movieImage(params/*, hash*/) {
  const IMG_HOST = 'https://image.tmdb.org/t/p/w185/';
  const IMAGE_PLACEHOLDER = 'http://placehold.it/200x200';
  return (params[0] !== null) ? `${IMG_HOST + params[0]}` : IMAGE_PLACEHOLDER;
}

export default Ember.Helper.helper(movieImage);
