module.exports = function solveEquation(equation) {
  var arr=equation.split(' ');
  var a=0, b=0, c=0;
  if (arr[0]=='-' && arr[4]=='+' && arr[8]=='+') {
    a=+arr[1]*(-1);
    b=+arr[5];
    c=+arr[9];
  } else if (arr[0]=='-' && arr[4]=='-' && arr[8]=='+') {
    a=+arr[1]*(-1);
    b=+arr[5]*(-1);
    c=+arr[9];
  } else if (arr[0]=='-' && arr[4]=='-' && arr[8]=='-') {
    a=+arr[1]*(-1);
    b=+arr[5]*(-1);
    c=+arr[9]*(-1);
  } else if (arr[0]=='-' && arr[4]=='+' && arr[8]=='-') {
    a=+arr[1]*(-1);
    b=+arr[5];
    c=+arr[9]*(-1);
  } else if (typeof(+arr[0])=='number' && arr[3]=='+' && arr[7]=='-') {
    a=+arr[0];
    b=+arr[4];
    c=+arr[8]*(-1);
  } else if (typeof(+arr[0])=='number' && arr[3]=='-' && arr[7]=='+') {
    a=+arr[0];
    b=+arr[4]*(-1);
    c=+arr[8];
  } else if (typeof(+arr[0])=='number' && arr[3]=='-' && arr[7]=='-') {
    a=+arr[0];
    b=+arr[4]*(-1);
    c=+arr[8]*(-1);
  } else if (typeof(+arr[0])=='number' && arr[3]=='+' && arr[7]=='+') {
    a=+arr[0];
    b=+arr[4];
    c=+arr[8];
  }

  var d=b*b-4*a*c;
  var D=Math.sqrt(d);
  var x1=Math.round((-b+D)/(2*a));
  var x2=Math.round((-b-D)/(2*a));

  if (a<0) {return [x1,x2];
  } else {return [x2,x1];}
}
