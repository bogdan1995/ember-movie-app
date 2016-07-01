import Ember from 'ember';

export function formatMoney(params/*, hash*/) {
  /**
   * should return readable money value (from 20000 to 20 000)
   * @type {Array|*}
     */
  let strings = params[0].toString().split(''); //get unformated value
  let cnt = 0; // counter
  let formatedMoney = strings.reduceRight(function (val, current) {
    cnt++;
    if ( cnt % 3 === 0 ) { //every 3th char add indent
      return val + current + ' ';
    }
    return val + current;
  }, '');
  formatedMoney = formatedMoney
    .split('')
    .reverse()
    .join('');
  return '$'+$.trim(formatedMoney);
}

export default Ember.Helper.helper(formatMoney);
