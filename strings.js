import {
  largo,
  substr,
  trim,
  trimEnd,
  chartAt,
  concat,
  indexof,
} from './index.js';

console.log(`Expected: 6` + largo('animal'));
console.log(`Expected: im` + substr('animal', 3, 10));
console.log(`Expected: animal` + trim(' a n i m a l '));
console.log(`Expected: a  b  c` + trimEnd('  a  b  c  '));
console.log(`Expected: e` + chartAt('abcdefghijk', 4));
console.log(`Expected: Me gusta mi iPhone` + concat('Me gusta', 'mi iPhone.'));
console.log(`Expected: 2` + indexof('animal', 'i', 1));
