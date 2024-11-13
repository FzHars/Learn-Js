// *
// **
// ***
// ****
// var str = "";
// for (var i = 0; i < 5; i++) {
//   for (var j = 0; j <= i; j++) {
//     str += "*";
//   }
//   str += "\n";
// }
// console.log(str);
// ****
// ***
// **
// *
// var str = "";
// for (var i = 10; i > 0; i--) {
//   for (var j = 0; j < i; j++) {
//     str += "*";
//   }
//   str += "\n";
// }
// console.log(str);
// *****
//  ****
//   ***
//    **
//     *
var str = "";
let n = 5;
for (var i = 0; i < n; i++) {
  for (var j = 0; j < i; j++) {
    str += " ";
  }
  for (var k = 0; k < n - i; k++) {
    str += "*";
  }
  str += "\n";
}
console.log(str);
