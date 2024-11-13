// function jumlahVolumeDuaKubus(a, b) {
//   var total;
//   var volumeA;
//   var volumeB;

//   volumeA = a * a * a;
//   volumeB = b * b * b;

//   total = volumeA + volumeB;
//   return total;
// }
// // jumlahVolumeDuaKubus(8, 3);
// console.log("Hasil jumlahnya adalah", jumlahVolumeDuaKubus(8, 3));
// console.log("Hasil jumlahnya adalah", jumlahVolumeDuaKubus(10, 15));

// refactoring agar lebih efisien
function jumlahVolumeDuaKubus(a, b) {
  
  
  return a * a * a + b * b * b;
}
alert("Hasil jumlahnya adalah "+jumlahVolumeDuaKubus(8, 3));