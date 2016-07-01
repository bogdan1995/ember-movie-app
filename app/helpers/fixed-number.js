import Ember from 'ember';

export function fixedNumber(params/*, hash*/) {
  return params[0].toFixed(params[1]);
}

export default Ember.Helper.helper(fixedNumber);
