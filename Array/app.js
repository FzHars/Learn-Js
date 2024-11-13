// index dimulai dari 0
// var hewan = ["Kucing", "Anjing", "Panda", "Gajah"];
// console.log(hewan[0]);

// beda type data
// var myArr = ["Kucing", 17, 18, true];
// console.log(myArr);

// array dengan isi funcitom
// var fnc = function () {
//   alert("nama anda");
// };
// var myArr = ["Kucing", 17, 18, true, fnc];
// console.log(myArr);

// array multidimensi
var fnc = function () {
  alert("nama anda");
};
var myArr = ["Kucing", 17, 18, true, fnc, [7, 8, 9]];
// console.log(myArr);
// jika ingin menampilkan angka 9 maka
console.log(myArr[5][2])
