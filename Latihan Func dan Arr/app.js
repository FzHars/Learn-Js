var penumpang = [];
var tambahPenumpang = function (namaPenumpang, penumpang) {
  // jika angkot kosong
  if (penumpang.length == 0) {
    // tambah penumpang diawal array
    penumpang.push(namaPenumpang);
    // kembalikan isi array dan keluar dari function
    return penumpang;
  } else {
    // Telusuri seluruh kursi dari awal
    for (var index = 0; index < penumpang.length; index++) {
      // jika ada kursi kosong
      if (penumpang[index] == undefined) {
        //tambah penumpang di kursi tersebut
        penumpang[index] = namaPenumpang;
        return penumpang;
      }
      // jika sudah ada nama yang sama
      else if (penumpang[index] == namaPenumpang) {
        console.log("Nama penumpang " + namaPenumpang + " sudah ada");
        return penumpang;
      }
      // jika seluruh kursi terisi
      else if (index == penumpang.length - 1) {
        // tambah penumpang di akhir array
        penumpang.push(namaPenumpang);
        // kembalika isi array dan keluar daru function
        return penumpang;
      }
    }
  }
};
// masalah nya jika diatas menambahkan
// nama setelah undefined maka console log tidak akan eksekusi

// 2. hapus
var hapusPenumpang = function (namaPenumpang, penumpang) {
  if (penumpang.length == 0) {
    console.log("Angkot masih kosong");
  } else {
    for (var i = 0; i < penumpang.length; i++) {
      if (penumpang[i] == namaPenumpang) {
        penumpang[i] = undefined;
        return penumpang;
      } else if (i == penumpang.length - 1) {
        console.log(namaPenumpang+" tidak ada didalam angkot");
        return penumpang;
      }
    }
  }
  return penumpang;
};
