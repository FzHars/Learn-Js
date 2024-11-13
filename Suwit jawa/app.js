var loop = true;
while (loop) {
  // pilihan player
  var player = prompt("Pilih : gajah, semut, orang");
  // pilihan computer
  // generate bilangan random
  // panggil fungsi Math milik js dengan method random
  var computer = Math.random();
  if (computer < 0.33) {
    computer = "gajah";
  } else if (computer >= 0.33 && computer < 0.66) {
    computer = "orang";
  } else {
    // diatas dari 0.67
    computer = "semut";
  }
  // console.log(computer);
  // rulesnya
  var hasil = "";
  if (player == computer) {
    hasil = "SERI";
  } else if (player == "gajah") {
    //   if (computer == "orang") {
    //     hasil = "MENANG";
    //   } else {
    //     hasil = "KALAH";
    //   }

    // jika menggunakan ternary
    hasil = computer == "orang" ? "MENANG" : "KALAH";
  } else if (player == "orang") {
    hasil = computer == "gajah" ? "KALAH" : "MENANG";
  } else if (player == "semut") {
    hasil = computer == "orang" ? "KALAH" : "MENANG";
  } else {
    hasil = "memilih pilihan yang salah";
  }
  // hasilnya
  alert(
    "Kamu memilih : " +
      player +
      " dan komputer memilih : " +
      computer +
      "\nMaka hasilnya adalah : Kamu " +
      hasil
  );
  loop = confirm("Main lagi ?");
}
alert("Terimakasih sudah bermain :)");
