var angka = prompt("Masukkan angka :");
// Jika ini digunakan seperti huruf maka akan dieksekusi jadi false
// if(angka % 2==0){
//     alert(angka + ' adalah yang dimasukkan adalah bilangan GENAP');
// } else {
//     alert(angka + ' adalah yang dimasukkan adalah bilangan GANJIL');
// }

// statement else if menambahkan kondisi jika selain huruf di isi
if (angka % 2 === 0) {
  alert(angka + " adalah yang dimasukkan adalah bilangan GENAP");
} else if (angka % 2 === 1) {
  alert(angka + " adalah yang dimasukkan adalah bilangan GANJIL");
} else {
  alert("Yang anda masukkan nilai BUKAN angka !");
}
