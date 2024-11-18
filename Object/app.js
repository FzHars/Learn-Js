// Membuat object
// Object Literal
var mhs = {
  nama: "Fawaz",
  umur: 24,
  ips: [2.34, 4.2, 3.41],
  //   bisa juga object didalam object
  alamat: {
    jalan: "Jln kimertasura",
    kabupaten: "Cirebon",
    provinsi: "Jawa Barat ",
  },
};

// function declaration
function objectMahasiswa(nama, umur, email, jurusan) {
  var mhs = {};
  mhs.nama = nama;
  mhs.umur = umur;
  mhs.email = email;
  mhs.jurusan = jurusan;
  return mhs;
}
// cara memanggilnya
var mhs2 = objectMahasiswa("Fz", 17, "abc@gmail.com", "TI");

// Constructor
// biasa nya diawali dengan huruf besar seperti membuat class
function Mahasiswa(nama, umur, email, jurusan) {
  this.nama = nama;
  this.umur = umur;
  this.email = email;
  this.jurusan = jurusan;
}
// cara manggilnya hampir sama dengan function declaration
// tapi beda nya, construktor hanya menggunakan new
var mhs3 = new Mahasiswa("Zf", 19, "Abc@gmail.com", "TI");
