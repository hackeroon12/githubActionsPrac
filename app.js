function add(a, b) {
  if(typeof a=='number' && typeof b=='number'){
     return a+b;
  }
  return -1;
}

console.log(add(2, 2));

module.exports = add;
