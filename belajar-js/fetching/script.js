// literal object
// let mahasiswa = {
//     nama : 'Ciessna',
//     energi : 2,
//     tidur : function (tidur) {
//         this.energi = this.energi + tidur;
//         console.log(`Malam ${this.nama}, Selamat Tidur`);
//     }
// }

// function declaration
// function Siswa(nama, energi) {
//     let siswa = {};
//     siswa.nama = nama,
//     siswa.energi = energi,

//     siswa.tidur = function (tidur){
//         this.energi += tidur;
//         console.log(`Malam ${siswa.nama}, Selamat Tidur`);
//     }

//     siswa.main = function (main) {
//         this.energi -= main;
//         console.log(`${siswa.nama} Sedang Bermain Game`);
//     }

//     return siswa;
// }

// let Ciessna = Siswa('Ciessna', 10);
// let Putra = Siswa('Putra', 15);

// function Mobil(jenis, kmh){
//     let mobil = {};
//     mobil.jenis = jenis;
//     mobil.kmh = kmh;
//     mobil.trouble = 350;
    
//     mobil.jalan = function (jalan) {
//         if(this.kmh > this.trouble){
//             this.kmh += jalan;
//             console.log(`Kecepatan Mobil ${this.jenis}, Mencapai Batas Maksimal Yaitu ${this.kmh}/kmh`);
//         }else{
//             this.kmh -= jalan;
//             console.log(`Mesin Mobil Jebol Karena Mencapai ${this.trouble}/kmh`);
//         }
//     }

//     return mobil;
// }

// let MK4 = Mobil('Supra MK4', 350)

// Constructor Function
// function Siswa(nama, energi) {
//     this.nama = nama,
//     this.energi = energi,

//     this.tidur = function (tidur) {
//         this.energi += tidur;
//         console.log(`Selamat Tidur ${this.nama}, Good Night`);
//     }

//     this.main = function (main) {
//         this.energi -= main;
//         console.log(`Diem, ${this.nama} Lagi Main Game`);
//     }
// }
// let Ciessna = new Siswa("Ciessna", 15)

// const methodMobil = {
//     kecepatan: function (kmh) {
//         this.speed += kmh;
//         console.log(`Kecepatan ${this.nama} Mencapai Batas Maksimal ${this.speed}/Kmh`);
//     },

//     berhenti: function (rem) {
//         this.speed -= rem;
//         console.log(`Kecepatan ${this.nama} Menurun ${this.speed}/Kmh Karena Menge-Rem`);
//     },

//     bensin: function (isi) {
//         this.pertamax += isi;
//         console.log(`Mobil sedang mengisi bensin ${this.pertamax}/Liter`);
//     }
// }

// function Mobil(nama, speed, bensin) {
//     let mobil = Object.create (methodMobil);
//     mobil.nama = nama;
//     mobil.speed = speed;
//     mobil.pertamax = bensin;

//     return mobil;
// }

// let Supra = Mobil("Supra MK4", 0, 1)

// function Mobil(nama, kmh, isi) {
//     this.nama = nama;
//     this.kmh = kmh;
//     this.isi = isi;
// }

// Mobil.prototype.kecepatan = function (speed) {
//     this.kmh += speed;
//     console.log(`Kecepatan anda mencapai ${this.kmh}/kmh`);
// }

// Mobil.prototype.berhenti = function (rem) {
//     this.kmh -= rem;
//     console.log(`Kecepatan anda berukang ${this.kmh}/kmh`);
// }

// Mobil.prototype.fuel = function (bensin) {
//     this.isi += bensin;
//     console.log(`Mobil sedang di isi bensin sebesar ${this.isi}/L`);
// }

// let pajero = new Mobil("Pajero", 0, 1);

// versi class
// class Manusia {
//     constructor(nama, energi){
//         this.nama = nama;
//         this.energi = energi;
//     }

//     makan(porsi){
//         this.energi += porsi;
//         console.log(`Selamat makan nasi padang ${this.nama}`);
//     }

//     aktivitas(kerja){
//         this.energi -= kerja;
//         console.log(`Selamat bekerja mencari cuan ${this.nama}`);
//     }

//     tidur(jam){
//         this.energi += jam;
//         console.log(`Selamat tidur ${this.nama}, malam`);
//     }
// }

// let orang = new Manusia("Allam", 10)

// var nama = "Ciessna Putra Andika"
// var username  = '@cirss_'

// function cetakUrl(username) {
//     var instagramUrl = 'http://instagram.com/';
//     return instagramUrl + username;
// }
// console.log(cetakUrl(username));


// function ucapkanSalam(waktu) {
//     return function (nama) {
//         console.log(`Alo selamat ${waktu}, selamat menjalani harimu ${nama}`);
//     }
// }

// let selamatPagi = ucapkanSalam('Pagi!')
// let selamatSiang = ucapkanSalam('Siang')
// let selamatMalam = ucapkanSalam('Malam')

// selamatPagi("CIESSNA")
// selamatSiang("PUTRA")
// selamatMalam("ANDIKA")

// let add = (function () {
//     let counter = 0;
//     return function () {
//         return ++counter
//     }
// })();   

// counter = 100

// console.log(add());
// console.log(add());
// console.log(add());

// let siswa = ['Ciessna', 'Putra', 'Andika'];

// let jumlahHuruf = siswa.map(function (nama) {
//     return nama.length;
// })

// let jumlahHuruf = siswa.map(nama => nama.length)

// let jumlahHuruf = siswa.map(nama => ({nama: nama, jmlHuruf: nama.length}))

// console.table(jumlahHuruf);

// const Mahasiswa = function () {
//     this.nama = 'ciessna'
//     this.umur = 17,
//     this.sayHello = () => {
//         console.log(`halo nama saya ${this.nama} dan umur saya ${this.umur}`);
//     }
// }

// const siswa = new Mahasiswa();

// function jumlahkan(...angka) {
//     let total = 0;
//     for(const a of angka){
//         total += a;
//     }

//     return total;
//     return angka.reduce((a,b) => a + b)
// }
// console.log(jumlahkan(1, 2, 3, 4, 5));

// const kelompok = ['ciessna', 'putra', 'andika', 'kocak'];
// const [ketua, wakil, ...anggota] = kelompok;

// console.log(anggota);

// const team = {
//     pm: 'indraaf',
//     fe: 'ciessna',
//     fe2: 'putra',
//     fe3: 'andika',
//     be: 'joko',
//     ux: 'bowo',
//     dev: 'anjir'
// }

// const {pm,...myTeam} = team;
// console.log(myTeam);

// function filterBy(type, ...values) {
//     return values.filter(v => typeof v === type)
// }

// console.log(filterBy('boolean', 1, 2, 'ciessna', 3, 'putra', 'andika', false, true, 'kocak'));

const angka = [1, -3, 4, 6, 9, -5, -7, 8, -10, 2];

// const newAngka = [];
// for (let i = 0; i < angka.length; i++){
//     if (angka[i] >= 3){
//         newAngka.push(angka[i])
//     }
// }

// console.log(newAngka);

//filter
// const newAngka = angka.filter(function (x) {
//     return x >= 3;
// });

// const newAngka = angka.filter(a => a >= 3);

//  console.log(newAngka);

// map
// const angkaBaru = angka.map (a => a * 2)
// const newAngka = angka.map(function (x) {
//     return x * 3;
// })

// console.log(angkaBaru);
// console.log(newAngka);
// const angkaBaru = angka.reduce((accu, current) => accu + current, 5)
// const newAngka = angka.reduce(function (accumulator, currentValue) {
//     return accumulator + currentValue;
// }, 5)

// console.log(angkaBaru);
// console.log(newAngka);

// const hasil = angka.filter(a => a > 5)
//     .map(a => a * 3)//18, 27, 24
//     .reduce((acc, curr) => acc + curr);//18+27+24=69
// console.log(hasil);

// const videos = Array.from(document.querySelectorAll('[data-duration]'));

// let jslanjutan = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))
//     .map(item => item.dataset.duration)
//     .map(waktu => {
//         const parts = waktu.split(':').map(part => parseFloat(part));
//         return parts[0] * 60 + parts[1];
//     })
//     .reduce((accu, curr) => accu + curr);

// const jam = Math.floor(jslanjutan / 3600);
// jslanjutan = jslanjutan - jam * 3600;
// const menit = Math.floor(jslanjutan / 60)
// const detik = jslanjutan - menit * 60

// const durasi = document.querySelector('.total-durasi');
// durasi.textContent = `${jam} jam ${menit} menit ${detik} detik`

// const jmlVid = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;
// const hasil = document.querySelector('.jumlah-video');
// hasil.textContent = `${jmlVid} Video`

// console.log(jmlVid);
// console.log(jam);
// console.log(menit);
// console.log(detik);

// const orang = [{
//     "nama" : "Ciessna",
//     "kelas" : 11,
//     "jurusan" : "rpl"
//     },
//     {
//     "nama" : "Putra",
//     "kelas" : 12,
//     "jurusan" : "rpl"
//     },
//     {
//     "nama" : "Andika",
//     "kelas" : 10,
//     "jurusan" : "rpl"
//     }
// ]

// console.log("mulai");
// orang.forEach (x => {
//     for (let i = 0; i < 1000; i++){
//         let date = new Date();
//     }
//     console.log(x.nama);
// })
// console.log("selesai");

// let tepat = false;
// const janji = new Promise((resolve, reject) => {
//     if(tepat){
//         setTimeout(() => {
//             resolve('Janji anda tepat');
//         }, 2000)
//     }else{
//         setTimeout(()=>{
//             reject('Janji anda tidak tepat')
//         }, 2000)
//     }
// })

// console.log('Mana Janjinya?');
// janji
//     .finally(() => console.log('Akhirnya'))
//     .then(apa => console.log('Yang Ditunggu : ' + apa))
//     .catch(ga => console.log('1/2 Kera : ' + ga));

// const film = new Promise(resolve => {
//     setTimeout(()=>{
//         resolve({
//             judul: 'Avengers',
//             Sutradara: 'Ciessna',
//             Genre : 'Action'
//         })
//     }, 1000)
// })

// const poke = new Promise(resolve => {
//     setTimeout(()=>{
//         resolve({
//             nama: "Snorlax",
//             generation: 1,
//             type: "normal"
//         })
//     })
// })

// Promise.all([film, poke])
//     .then(response => {
//         const [film, poke] = response;
//         console.log(film);
//         console.log(poke);
//     })

// function cobaPromise() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('selesai')
//         }, 2000);
//     })
// }

// async function cobaAsync() {
//     const coba = await cobaPromise();
//     console.log(coba);
// }

// cobaAsync()

