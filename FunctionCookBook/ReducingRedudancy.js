// model fungsi secara terpisah agar efisien
function makeString(prefix, str, suffix){
  return prefix + str + suffix;
}
function quotesString(str){
  return makeString('""',str,'""');
}
function barString(str){
  return makeString('-', str, '-');
}
function namedEntity(str){
  return makeString('&#', str, ';');
}
// console.log(barString("apple"));
