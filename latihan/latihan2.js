var gajikotor = 4500000;
var trans = 10000*24;
var infak = 50000;
var bpjs = 250000;
var pajak = gajikotor*2.5/100;
var totalpotongan = bpjs+infak+pajak;
var hasil = gajikotor-totalpotongan+trans;

console.log( "Gaji Kotor : Rp." + gajikotor);
console.log("=========================================");
console.log( "Potongan pajak 2,5% : Rp." + pajak);
console.log( "Potongan Bpjs :" + bpjs);
console.log( "Potongan Infak :" + infak);
console.log("=========================================");
console.log( "Total Potongan :" + totalpotongan );
console.log("==========================================");
console.log("Tunjangan Transport : Rp.10000");
console.log("Total Hari Kerja : 24 hari");
console.log("==========================================");
console.log("Total Tunjangan : Rp." + trans);
console.log("===========================================");
console.log("Perhitungan Gaji : (gajikotor - pajak) +  Tunjangan ");
console.log("(4500000-412500) + 240000")
console.log("==========================================");
console.log("Gaji Bersih : Rp." + hasil);