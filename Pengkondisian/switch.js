// var angka = parseInt(prompt("masukkan angka: "));

// switch (angka) {
//   case 1:
//     alert("anda memasukkan angka 1");
//     break;
//   case 2:
//     alert("anda memasukkan angka 2");
//     break;
//   case 3:
//     alert("anda memasukkan angka 3");
//     break;
//   default:
//     alert("anda salah memasukkan angka");
//     break;
// }
var item = prompt(
  "Masukkan nama makanan atau minuman : \n (cth: nasi, daging, susu, hamburger, softdrink)"
);

switch (item) {
  case "nasi":
  case "daging":
    alert("Makanan SEHAT");
    break;
  case "susu":
    alert("Minuman SEHAT");
    break;
  case "hamburger":
  case "softdrink":
    alert("Makanan / Minuman tidak SEHAT");
    break;
  default:
    alert('Anda salah memasukkan makanan / minuman yang ada!')
    break;
}
