import Ember from 'ember';

export function fixedNumber(params/*, hash*/) {
  /**
   * should return fixed number (n,nn number form n,nnnnnnn.......)
   */
  return params[0].toFixed(params[1]);
}

export default Ember.Helper.helper(fixedNumber);
