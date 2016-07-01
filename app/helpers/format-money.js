import Ember from 'ember';

export function formatMoney(params/*, hash*/) {
  let strings = params[0].toString().split('');
  let cnt = 0;
  let formatedMoney = strings.reduceRight(function (val, current) {
    cnt++;
    if ( cnt % 3 === 0 ) {
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
