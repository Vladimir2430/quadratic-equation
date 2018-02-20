module.exports = function solveEquation(equation) {
  var arr=equation.split(' ');
  if (arr[0]=='-' && arr[4]=='+' && arr[8]=='+') {
    var a=arr[1]*(-1);
    var b=arr[5];
    var c=arr[9];
  } else if (arr[0]=='-' && arr[4]=='-' && arr[8]=='+') {
    var a=arr[1]*(-1);
    var b=arr[5]*(-1);
    var c=arr[9];
  } else if (arr[0]=='-' && arr[4]=='-' && arr[8]=='-') {
    var a=arr[1]*(-1);
    var b=arr[5]*(-1);
    var c=arr[9]*(-1);
  } else if (typeof(arr[0])=='number' && arr[3]=='+' && arr[7]=='-') {
    var a=arr[0];
    var b=arr[4];
    var c=arr[8]*(-1);
  } else if (typeof(arr[0])=='number' && arr[3]=='-' && arr[7]=='+') {
    var a=arr[0];
    var b=arr[4]*(-1);
    var c=arr[8];
  } else if (typeof(arr[0])=='number' && arr[3]=='-' && arr[7]=='-') {
    var a=arr[0];
    var b=arr[4]*(-1);
    var c=arr[8]*(-1);
  } else {
    var a=arr[0];
    var b=arr[4];
    var c=arr[8];
  }
  var d=b*b-4*a*c;
  var x1=0;
  var x2=0;
  if (d>0) {
    var D=Math.sqrt(d);
    x1=(-b+D)/(2*a);
    x2=(-b-D)/(2*a);
  } else if (d==0) {
    x1=(-1)*b/(2*a);
    x2=(-1)*b/(2*a);
  }
  return [x1, x2];
}
