// Object angkot
function Angkot(sopir, trayek, penumpang, kas) {
  this.sopir = sopir;
  this.trayek = trayek;
  this.penumpang = penumpang;
  this.kas = kas;

  // Method untuk naik penumpang
  this.naikPenumpang = function (namapenumpang) {
    this.penumpang.push(namapenumpang);
    return this.penumpang;
  };
  // Method untuk turun penumpang
  this.turunPenumpang = function (namapenumpang, bayar) {
    if (this.penumpang.length === 0) {
      console.log("Penumpang tidak ada");
      return false;
    }
    for (let i = 0; i < this.penumpang.length; i++) {
      if (this.penumpang[i] == namapenumpang) {
        this.penumpang[i] = undefined;
        this.kas += bayar;
        return this.penumpang;
      }
    }
  };
}
var angkot1 = new Angkot("Fawaz", ["Cirebon", "Ciledug"], [], 0);
var angkot2 = new Angkot("Batman", ["Gebang", "Losari"], [], 0);
