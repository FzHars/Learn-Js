var noAngkot = 1;
var jmlAngkot = 12;
var angkotBeroperasi = 6;

while (noAngkot <= angkotBeroperasi) {
  console.log("Angkot No." + noAngkot + " beroperasi dengan baik.");
  noAngkot++;
}

for (noAngkot = angkotBeroperasi + 1; noAngkot <= jmlAngkot; noAngkot++) {
  console.log("Angkot No." + noAngkot + " tidak beroperasi dengan baik.");
}
