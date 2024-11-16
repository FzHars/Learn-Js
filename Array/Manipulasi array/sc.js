// Menambah isi array
// dibawah ini menampilkan dengan cara objek
// var ar = [];
// ar[0] = "Kucing";
// ar[1] = "Leo";
// ar[2] = "Miko";
// ar[3] = "Lucy";
// ar[4] = "Kimo";
// ar[5] = "Meow";
// ar[7] = "Tidak ada";
// console.log(ar);

// Menghapus isi array
// var ar = ["Kucing"];
// ar[0] = undefined;
// ar[1] = "Leo";
// ar[2] = "Miko";
// ar[3] = "Lucy";
// ar[4] = "Kimo";
// console.log(ar);

// Menampilkan isi array (dengan for)
// var ar = ["Leo", "Miko", "Lucy", "Kimo", "Meow"];
// for (var i = 0; i < 5; i++) {
//   console.log(ar[i]);
// }
// sedikit variasi
// var ar = ["Leo", "Miko", "Lucy", "Kimo", "Meow"];
// for (var i = 0; i < 5; i++) {
//   console.log("Kucing ke " + (i + 1) + " " + ar[i]);
// }

// Method array
// 1. length
// agar javascript yang menghitung elemen nya
// maka gunakan method array yang namanya length
// var ar = ["Leo", "Miko", "Lucy", "Kimo", "Meow", "Length"];
// for (var i = 0; i < ar.length; i++) {
//   console.log("Kucing ke " + (i + 1) + " " + ar[i]);
// }

// 2. join
var ar = ["Leo", "Miko", "Lucy", "Kimo", "Meow"];
// console.log(ar.join());
// maka output akan
// Leo,Miko,Lucy,Kimo,Meow
// jika ingin rapi gunakan separator
console.log(ar.join(" ~ "));

// 3. push(dorong atau tambah pada elemen terakhir)
// dan pop(menghapus elemen terakhir)
// ar.push(" push ");
// ar.pop();
// console.log(ar.join(" ~ "));

// 4. unshift(menambahkan elemen pertama) dan shift(menghapus elemen pertama)
// ar.unshift("unshift");
// ar.shift();
// console.log(ar.join(" ~ "));

// 5. splice(menambah/menghapus ditengah elemen )
//  splice (indexAwal, naudihapusBrapa, elemenBaru1, ...)
// jika pada 0 tanpa nilai hapus maka
// ar.splice(3, 0, "coba splice");
// jika dengan nilai hapus
// ar.splice(0, 4, "coba splice");
// console.log(ar.join(" ~ "));

// 6. slice (untuk memotong atau menghapus)
// var ar = ["Leo", "Miko", "Lucy", "Kimo", "Meow"];
// slice (awal, akhir)
// var ar2 = ar.slice(2, 4);
// console.log(ar2.join(" ~ "));
// console.log(ar.join(" ~ "));

// 7. foreach
// jika cara biasa dengan for seperti ini
// var angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (var i = 0; i < angka.length; i++) {
//   console.log(angka[i]);
// }
// jika dengan forEach
// angka.forEach(function (e) {console.log(e);});
// jika forEach dengan index nya
// var nama = ["Leo", "Miko", "Lucy", "Kimo", "Meow"];
// nama.forEach(function (e, i) {
//   console.log("Kucing ke " + (i + 1) + " namanya " + e);
// });

// 8. map
// var angka = [1, 2, 4, 3, 5, 7, 9];
// var angka2 = angka.map(function (e) {
//   return e * 2;
// });
// console.log(angka2.join(" - "));

// 9. sort
// var angka = [1, 2, 4, 3, 5, 7, 9];
// angka.sort();
// console.log(angka.join(" - "));
// diatas tidak ada masalah, jika ada angka 10 / 30
// maka yang akan diurutkan karakter pertamanya yaitu 1 / 3
// caranya menggunakan fungsi perbandingan pada sort
// var angka = [1, 2, 4, 10, 30, 3, 5, 7, 9];
// angka.sort(function(a,b){
//     return a - b;
// });
// console.log(angka.join(" - "));

// 10. filter(mencari nilai pada array
//     dan mengemblaikan dalam bentuk array)
// var angka = [1, 2, 4, 10, 30, 3, 5, 7, 9];
// var angka2 = angka.filter(function (x) {
//   return x > 5;
// });
// console.log(angka2.join(" - "));

// 11. find(mencari tapi hanya satu nilai pertama saja)
// var angka = [1, 2, 4, 10, 30, 3, 5, 7, 9];
// var angka2 = angka.find(function (x) {
//   return x > 7;
// });
// console.log(angka2);
