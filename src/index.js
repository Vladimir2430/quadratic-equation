module.exports = function solveEquation(equation) {
  let arr = equation.split(' ');
  if (arr[0] !== '-') {arr.unshift(' ');}
  let a =+ (arr[0] + arr[1]),
  b = +(arr[4] + arr[5]),
  c = +(arr[8] + arr[9]),
  d = b * b - 4 * a * c,
  D = Math.sqrt(d),
  x1 = Math.round((-b + D) / (2 * a)),
  x2 = Math.round((-b - D) / (2 * a));
  if (a < 0) {return [x1, x2];
  } else {return [x2, x1];}
}
