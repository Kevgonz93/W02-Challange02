export const largo = (x) => {
  let count = '';
  for (let i = 0; x[i] !== undefined; i++) {
    count++;
  }
  return count;
};

console.log(largo('animal'));

export const substr = (x, start, end) => {
  let newstr = '';
  const strelem = largo(x);
  for (let i = start; i < end && i < strelem; i++) {
    newstr += x[i];
  }
  return newstr;
};

console.log(substr('animal', 2, 4));

export const trim = (x) => {
  let trim = '';
  for (let i = 0; i < largo(x); i++) {
    if (x[i] !== ' ') {
      trim += x[i];
    }
  }
  return trim;
};

console.log(trim('  a n i m a l  '));

export const trimEnd = (x) => {
  let endstr = largo(x) - 1;
  let last = '';
  while (endstr >= 0 && x[endstr] === ' ') {
    endstr--;
  }
  return x.trim(x, 0, endstr + 1);
};
console.log(trimEnd('a  b  c  '));

export const chartAt = (x, char) => {
  if (char >= 0 && char < largo(x)) {
    return x[char];
  } else if (char > largo(x)) {
    return null;
  }
};
console.log(chartAt('abcdefghijk', 4));

export const concat = (x, y) => {
  return x + ' ' + y;
};
console.log(concat('Me gusta', 'mi iPhone.'));

export const indexof = (x, busq, ind) => {
  for (let i = ind; largo(x) - 1; i++) {
    if (busq === x[i]) {
      return i;
    }
  }
};
console.log(indexof('animal', 'i', 1));
