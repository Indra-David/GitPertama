// sesi3_nama.js

let tinggi = 4; // Ubah sesuai kebutuhan
let hasil = "";

for (let i = 1; i <= tinggi; i++) {
    for (let j = 1; j <= i; j++) {
        hasil += "*";
    }
    hasil += "\n";
}

console.log(hasil);