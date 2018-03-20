module.exports = function solveEquation(equation) {
  let arr=equation.split(' ');
  if (arr[0] != '-') {arr.unshift(' ');}
  let a=+(arr[0] + arr[1]);
  let b=+(arr[4] + arr[5]);
  let c=+(arr[8] + arr[9]);
  let d=b*b-4*a*c;
  let D=Math.sqrt(d);
  let x1=Math.round((-b+D)/(2*a));
  let x2=Math.round((-b-D)/(2*a));
  if (a<0) {return [x1,x2];
  } else {return [x2,x1];}
}
