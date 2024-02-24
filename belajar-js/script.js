// var nama = "Ciessna"
// let namaBelakang = "Putra Andika"
// const umur = 15 + 2


// console.log(nama, namaBelakang, umur)

// let msg1 = "Hallo"
// msg2 = "berhasil"
// const msg3 = "coding"

// if(true){
//     let msg1 = "yes"
//     var message = "ini message"
//     msg3 = "selamat"
// }

// console.log(msg1);

// let angka = 3
// let nama = "Ciessna"
// var tinggi = false;
// var cm = 172
// var warna = false;
// var warnaKesukaan = ['Biru', 'Putih', 'Hitam']

// console.log(warnaKesukaan[0])

// if(cm == 172){
//     tinggi=true;
// }

// console.log(`Anak Ke ${angka}`, nama,`Tinggi Anak ${cm} =`, tinggi);

// function Fungsi() {
//     console.log("Ada apa?")   
// }

// Fungsi()

// const Ada = () =>{
//     console.log("Minjem Dulu 100")
// }

// Ada()

// function Ngapain(){
//     let lempar = "terlepas"
//     return lempar;
// }

// let ngambil = Ngapain();
// console.log(ngambil);

// function ambilData(x,y,z){
//     console.log(x);
//     console.log(y);
//     console.log(z);
//     console.log(typeof(z));
// }


// function apaSih (){
//     var apaCoba = "Gak Tau";
//     return apaCoba;
// }

// let gakJelas = apaSih();
// console.log(`lah masa ${gakJelas}`);

// function nilai() {
//     let nilaiAngka = 3;
//     if(nilaiAngka === 4){
//         console.log("True");
//     }else if(nilaiAngka == 3){
//         console.log("True");
//     }else{
//         console.log("False");
//     }
//     if(nilaiAngka == 2) console.log("benar");
//     else console.log("salah");
// }

// nilai()

// let x = 10;

// if(x<10)
// console.log("x kurang dari 10")
// else if(x>10)
// console.log("x lebih dari 10")
// else
// console.log("x adalah 10");

// let x = 10;
// let y = 20;
// let z = 30;

// if(x<y){
//     if(x<z){
//         console.log("nilai x lebih kecil dari nilai z");
//     }else{
//         console.log("nilai x adalah yang terbesar ketiga");
//     }
// }else{
//     if(x>y){
//         console.log("nilai x lebih kecil dari nilai y");
//     }else{
//         console.log("nilai x adalah yang terbesar ketiga");
//     }
// }

// function tipeData(){
//     let data = "2";

//     if(data == 2){
//         return data;
//     }else{
//         return "gagal";
//     }
// }
// console.log(tipeData());

// function testingSwitch() {
//     var nilai = 100;

//     switch (nilai) {
//         case 100:
//             console.log("Akreditas A+");
//             break;
//         case 80:
//             console.log("Akreditas A-");
//             break;
//         case 70:
//             console.log("Akreditas B");
//             break;
//         case 60:
//             console.log("Akreditas C");
//             break;
//         default:
//             console.log("Awokawokwok");
//     }
// }

// testingSwitch()

// let ciessna = 400;
// let syahreza = 50;
// let danish = 500;

// if(ciessna > syahreza){
//     if(ciessna>danish){
//         console.log("Ciessna Paling Tinggi ya?");
//     }else{
//         console.log("Danish Paling Tinggilah");
//     }
// }else if(ciessna > danish){
//     if(ciessna < syahreza){
//         console.log("Syahreza paling tinggi yakan?");
//     }else{
//         console.log("Ciessna paling tinggilah");
//     }
// }else{
//     if(syahreza > danish){
//         console.log("Syahreza paling tinggi ini");
//     }else if(syahreza < danish){
//         console.log("Danish Paling tinggi fix");
//     }else{
//         console.log("kocak");
//     }
// }

// console.log("ciessna" +ciessna);
// console.log("syahreza" +syahreza);
// console.log("danish" +danish);

// function Loop(){
//     for (let i = 0; i < 10; i++){
//         console.log(`Nilai i : ${i}`);
//     }
// }

// Loop()

// let i = 0;

// while(i<10){
//     console.log("Nilai ke : ", i);
//     i++
// }

// do{
//     console.log("ini yang ke : ", i)
//     i++;
// }while(i<10)

// for (let i = 0; i < 2; i++){
//     console.log("i ke ", i);
//     for(let j = 0; j < 2; i++){
//     console.log("j ke ", j);
//     }
//     console.log("");
// }

// for (let i = 1; i <= 20; i++){
//     if (i % 2 === 0){
//         console.log("genap");
//     }else{
//         console.log(i);
//     }
// }
// console.log("Kelipatan ke ", i);

// function nestedArray (){
//     let data = [
//         ["Aku", "Ciessna", "Ganteng"],
//         ["Aku", "Syahreza", "Welek"],
//         ["Aku", "Danish", "Jomok"]
//     ]

//     console.log(data.length);
//     console.log(data[0][1]);
// }

// nestedArray()

// let angka = [1,2,3,4,5];
// for (let i = 0; i < angka.length; i++){
//     console.log(angka[i]);
// }

// for (let g of angka){
//     console.log(g);
// }

// let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 18]

// for (let i = 0; i <= data.length; i++){
//     console.log('aku'+i);
// }

// for (let z of data){
//     console.log(z);
// }

// function object (){
//     let kendaraan = {
//         type: "sedan",
//         Tahun: [2000, 2001, 2002, 2003],
//         Jenis: "Supra",
//         Merk: "Toyota"
//     }

//     console.log(kendaraan);  
//     console.log(kendaraan.type);  
//     console.log(kendaraan.Tahun[0]);  
//     console.log(kendaraan.Tahun);  
//     console.log(kendaraan.Jenis);  
//     console.log(kendaraan.Merk);  
// }

// object()

// function object (){
//     let kendaraan = {
//         type: "sedan",
//         Tahun: [2000, 2001, 2002, 2003],
//         Jenis: "Supra",
//         Merk: "Toyota"
//     }
//     kendaraan.Tahun = 1999,
//     console.log(kendaraan);  
//     console.log(kendaraan.Tahun);    
// }

// object()

// function object (){
//     let kendaraan = {
//         type: "sedan",
//         Tahun: [2000, 2001, 2002, 2003],
//         Jenis: "Supra",
//         Merk: "Toyota"
//     }
//     kendaraan.harga = 2000000000,
//     kendaraan.Tahun = 1999,
//     console.log(kendaraan);  
//     console.log(kendaraan.Tahun);    
// }

// object()

// function object (){
//     let akta = {
//         Nama: "CIESSNA PUTRA ANDIKA",
//     }
//     akta.Nama = "CIESSNA PUTRA",
//     akta.umur = 17,
//     akta.ttl = "Tangerang 26-06-2006"
//     return akta;
// }

// console.log(object());

// function callObject (){
//     let x = {
//         pesan : halo()
//     }
//     console.log(x.pesan);
// }

// function halo (){
//     return "Hello World"
// }

// callObject()

// function nestedObject(){
//     let siswa = {
//         nama : "gonek",
//         nilai : {
//             semester1 : 80,
//             semester2 : 80.1,
//             semester3 : 90,
//         }
//     }
//     console.log(siswa.nilai);
// }

// nestedObject()
// function forObject(){
//     let siswa = {
//         nama : "osas",
//         kelas : "XI",
//         jurusan : "RPL",
//     }
//     for (let g in siswa){
//         console.log(siswa[g]);
//     }
// }

// forObject()

// tugas

// function tugasObject(){
//     let orang = {
//         nama : "kamu",
//         kamu : "siapa",
//         siapa : "sih..."
//     }
//     orang.kocak = "kocak"
//     orang.gajelas = {
//         gajelas : "banget",
//         dih : "dah"
//     }
//     for (let x in orang){
//         console.log(orang[x]);
//     }
// }

// tugasObject()

// function cekData(){
//     let data = "Nama"

//     console.log(typeof(data));
// }

// cekData()

// function comments(){
//     console.log("satu");
//     console.log("dua");
// }

// comments()

// function operator (){
//     let a = 50
//     let b = 3

//     // console.log(a+b);
//     return a-b;
// }

// console.log(operator());

// let a = 10;
// let b = 20;

// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);

// let c = 1;

// console.log(c);
// c++
// console.log(c);
// c++
// console.log(c);
// c--
// console.log(c);

// let a = 10
// let b = 11

// console.log(a>b);
// console.log(a<b);
// console.log(a>=b);
// console.log(a<=b);
// console.log(a==b);
// console.log(a===b);
// console.log(a!=b);
// console.log(a!==b);

// let angka = 1;
// for (let i = 2; i <= 11; i++) {
//   console.log(angka);
//   angka += i;
//   console.log(i);
// }

// let a = "kocak"
// let b = "banget"
// let c = 2
// let d = a + b + c;
// console.log(d);

// let a;
// let b;
// let c;

// a = 1
// b = 2
// c = 3
// console.log(a,b,c);
// a = 2
// b = 3
// c = 4
// console.log(a,b,c);

// let angka1 = [1,2,3,4,5]
// let angka2 = [6,7,8,9]
// let angkaGabung = [...angka1, ...angka2, 10]

// console.log(angkaGabung);

// ()
// * / %
// + -
// == === != !==
// &&
// ||

// let x = 3 + 10 * 8 / 2;
// console.log(x);

// let a = 4 * 5 + 10 / 2;
// console.log(a);